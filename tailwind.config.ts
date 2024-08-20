import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],

  darkMode: 'class',

  theme: {
    extend: {
      colors: {
        slate: {
          900: '#0b111e',
          700: '#151c28',
          600: '#21252c',
          500: '#77bef8',
          400: '#525760',
          300: '#888b91',
          200: '#babec4',
          100: '#f0f2f4',
          50: '#fafcff',
        },
      },

      screens: {
        xs: '320px',
      },

      gridTemplateColumns: {
        badges: 'repeat(3, 140px)',
        skills: 'repeat(2, 350px)',
      },

      margin: {
        26: '6.5rem',
      },

      width: {
        '9/10': '90%',
        84: '21.875rem',
      },

      maxWidth: {
        container: '61rem',
        slide: '22rem',
      },

      backgroundColor: {
        overlay: 'hsla(219, 28%, 16%, .7)',
        nav: 'hsla(219, 32%, 16%, .8)',
        'nav-light': 'hsla(219, 32%, 90%, .8)',
      },

      backgroundImage: {
        profile:
          'linear-gradient(180deg, hsla(207, 90%, 72%, .7), hsla(207, 90%, 72%, .2))',
      },

      borderRadius: {
        '4xl': '4rem',
      },

      boxShadow: {
        md2: '0 4px 4px hsla(0, 0%, 4%, .3)',
      },

      fontSize: {
        '4.5xl': '2.5rem',
      },
    },
  },
  plugins: [],
}
export default config
