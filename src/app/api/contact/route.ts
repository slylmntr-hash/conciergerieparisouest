import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

const RECIPIENT = 'conciergerieparisouest@gmail.com'

function sanitize(val: unknown): string {
  if (typeof val !== 'string') return ''
  return val.trim().slice(0, 500).replace(/[<>]/g, '')
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()

    const nom = sanitize(body.nom)
    const prenom = sanitize(body.prenom)
    const telephone = sanitize(body.telephone)
    const email = sanitize(body.email)
    const commune = sanitize(body.commune)
    const source = sanitize(body.source)

    if (!nom || !prenom || !telephone || !email) {
      return NextResponse.json({ error: 'Champs requis manquants' }, { status: 400 })
    }

    // Basic email validation
    const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRe.test(email)) {
      return NextResponse.json({ error: 'Email invalide' }, { status: 400 })
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    })

    const subject = commune
      ? `Nouvelle demande — ${commune} — ${prenom} ${nom}`
      : `Nouvelle demande — ${prenom} ${nom}`

    const html = `
<div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;padding:20px;color:#1a1a1a">
  <div style="border-bottom:2px solid #b8935a;padding-bottom:16px;margin-bottom:20px">
    <h2 style="margin:0;color:#b8935a;font-size:20px">Nouvelle demande d'estimation</h2>
    <p style="margin:4px 0 0;color:#888;font-size:13px">Conciergerie Paris Ouest</p>
  </div>
  <table style="width:100%;border-collapse:collapse">
    <tr>
      <td style="padding:8px 0;border-bottom:1px solid #e5e0d5;width:140px;color:#5a5a5a;font-size:14px"><strong>Nom</strong></td>
      <td style="padding:8px 0;border-bottom:1px solid #e5e0d5;font-size:14px">${prenom} ${nom}</td>
    </tr>
    <tr>
      <td style="padding:8px 0;border-bottom:1px solid #e5e0d5;color:#5a5a5a;font-size:14px"><strong>Téléphone</strong></td>
      <td style="padding:8px 0;border-bottom:1px solid #e5e0d5;font-size:14px"><a href="tel:${telephone}" style="color:#b8935a">${telephone}</a></td>
    </tr>
    <tr>
      <td style="padding:8px 0;border-bottom:1px solid #e5e0d5;color:#5a5a5a;font-size:14px"><strong>Email</strong></td>
      <td style="padding:8px 0;border-bottom:1px solid #e5e0d5;font-size:14px"><a href="mailto:${email}" style="color:#b8935a">${email}</a></td>
    </tr>
    ${commune ? `
    <tr>
      <td style="padding:8px 0;border-bottom:1px solid #e5e0d5;color:#5a5a5a;font-size:14px"><strong>Commune</strong></td>
      <td style="padding:8px 0;border-bottom:1px solid #e5e0d5;font-size:14px">${commune}</td>
    </tr>` : ''}
    <tr>
      <td style="padding:8px 0;color:#5a5a5a;font-size:14px"><strong>Source</strong></td>
      <td style="padding:8px 0;font-size:14px">${source || 'website'}</td>
    </tr>
  </table>
  <p style="margin-top:24px;font-size:12px;color:#888">Envoyé depuis conciergerieparisouest.fr</p>
</div>`

    await transporter.sendMail({
      from: `"Conciergerie Paris Ouest" <${process.env.SMTP_USER}>`,
      to: RECIPIENT,
      replyTo: email,
      subject,
      html,
    })

    return NextResponse.json({ success: true }, { status: 200 })
  } catch (err) {
    console.error('Contact API error:', err)
    return NextResponse.json({ error: 'Erreur serveur' }, { status: 500 })
  }
}
