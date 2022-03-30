module.exports = {
  prefix: '',
  mode: 'jit',
  important: false,
  content: [
    "./src/**/*.{html,ts}",
  ],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    colors: {
      'primary': '#1fb6ff',
      'secondary': '#ff49db'
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
