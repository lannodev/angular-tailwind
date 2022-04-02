module.exports = {
  prefix: '',
  mode: 'jit',
  important: false,
  content: [
    "./src/**/*.{html,ts}",
  ],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      boxShadow: {
        'custom': '0px 0px 50px 0px rgb(82 63 105 / 15%)',
      },
      colors: {
        night: {
          50: '#e4e4eb',
          100: '#bbbace',
          200: '#8f8ead',
          300: '#66658c',
          400: '#4b4777',
          500: '#302a62',
          600: '#2b245b',
          700: '#241c51',
          800: '#1c1445',
          900: '#130030',
        },
      }
    },
    fontFamily: {
      poppins: ['Poppins', 'system-ui', 'sans-serif'],
      nunito: ['Nunito Sans', 'sans-serif']
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio')
  ],
}
