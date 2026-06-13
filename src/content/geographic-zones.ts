export const geographicZones: Record<string, { commune: string; url: string; tier: string }[]> = {
  'La Défense & Environs': [
    { commune: 'Puteaux', url: '/gestion-locative/la-defense/', tier: 'T1' },
    { commune: 'Courbevoie', url: '/gestion-locative/courbevoie/', tier: 'T2' },
    { commune: 'Nanterre', url: '/gestion-locative/nanterre/', tier: 'T1' },
    { commune: 'Levallois-Perret', url: '/gestion-locative/levallois-perret/', tier: 'T1' },
    { commune: 'Neuilly-sur-Seine', url: '/gestion-locative/neuilly-sur-seine/', tier: 'T1' },
  ],
  'Boulogne & Seine': [
    { commune: 'Boulogne-Billancourt', url: '/gestion-locative/boulogne-billancourt/', tier: 'T1' },
    { commune: 'Issy-les-Moulineaux', url: '/gestion-locative/issy-les-moulineaux/', tier: 'T1' },
    { commune: 'Meudon', url: '/gestion-locative/meudon/', tier: 'T2' },
    { commune: 'Vanves', url: '/gestion-locative/vanves/', tier: 'T2' },
    { commune: 'Sèvres', url: '/gestion-locative/sevres/', tier: 'T2' },
  ],
  'Portes de Paris': [
    { commune: 'Clichy', url: '/gestion-locative/clichy/', tier: 'T2' },
    { commune: 'Montrouge', url: '/gestion-locative/montrouge/', tier: 'T2' },
    { commune: 'Malakoff', url: '/gestion-locative/malakoff/', tier: 'T2' },
    { commune: 'Asnières-sur-Seine', url: '/gestion-locative/asnieres-sur-seine/', tier: 'T2' },
  ],
  'Versailles & Grand Parc': [
    { commune: 'Versailles', url: '/gestion-locative/versailles/', tier: 'T1' },
    { commune: 'Le Chesnay-Rocquencourt', url: '/gestion-locative/le-chesnay-rocquencourt/', tier: 'T1' },
    { commune: 'Viroflay', url: '/gestion-locative/viroflay/', tier: 'T1' },
    { commune: 'Vélizy-Villacoublay', url: '/gestion-locative/velizy-villacoublay/', tier: 'T1' },
    { commune: 'Jouy-en-Josas', url: '/gestion-locative/jouy-en-josas/', tier: 'T3' },
  ],
  'Saint-Germain & Boucles': [
    { commune: 'Saint-Germain-en-Laye', url: '/gestion-locative/saint-germain-en-laye/', tier: 'T1' },
    { commune: 'Poissy', url: '/gestion-locative/poissy/', tier: 'T2' },
    { commune: 'Maisons-Laffitte', url: '/gestion-locative/maisons-laffitte/', tier: 'T2' },
    { commune: 'Conflans-Sainte-Honorine', url: '/gestion-locative/conflans-sainte-honorine/', tier: 'T3' },
  ],
  'Sud 92': [
    { commune: 'Antony', url: '/gestion-locative/antony/', tier: 'T3' },
    { commune: 'Châtenay-Malabry', url: '/gestion-locative/chatenay-malabry/', tier: 'T3' },
    { commune: 'Sceaux', url: '/gestion-locative/sceaux/', tier: 'T3' },
    { commune: 'Bourg-la-Reine', url: '/gestion-locative/bourg-la-reine/', tier: 'T3' },
    { commune: 'Le Plessis-Robinson', url: '/gestion-locative/le-plessis-robinson/', tier: 'T4' },
  ],
}
