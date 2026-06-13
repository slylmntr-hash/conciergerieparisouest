import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: { DEFAULT: '#faf9f6', 2: '#f4f1ea', 3: '#ede9e0' },
        charcoal: '#1a1a1a',
        dark: '#2d2d2d',
        mid: '#5a5a5a',
        muted: '#888888',
        gold: { DEFAULT: '#b8935a', light: '#d4af7a', pale: '#f0e6d3' },
        border: '#e5e0d5',
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;
