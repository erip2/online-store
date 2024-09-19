import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'dark-primary': '#2A254B',
        primary: '#4E4D93',
        'light-grey': '#F9F9F9',
        'border-grey': '#EBE8F4',
        'border-dark': '#CAC6DA',
      },
      fontFamily: {
        clash: ['var(--font-clash-display)'],
        satoshi: ['var(--font-satoshi)'],
      },
    },
  },
  plugins: [],
};
export default config;
