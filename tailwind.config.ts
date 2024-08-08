import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        slate: {
          900: '#0b111e',
          700: '#151c28',
          500: '#77bef8',
          300: '#888b91',
          200: '#babec4',
          100: '#f0f2f4',
        },
      },

      backgroundColor: {
        overlay: 'hsla(219, 28%, 16%, .7)',
      },

      backgroundImage: {
        profile:
          'linear-gradient(180deg, hsla(207, 90%, 72%, .7), hsla(207, 90%, 72%, .2))',
      },

      gridTemplateColumns: {
        badges: 'repeat(3, 140px)',
      },
    },
  },
  plugins: [],
}
export default config
