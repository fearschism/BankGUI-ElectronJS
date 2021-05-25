module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      backgroundColor: ["active",'disabled'],
      scale: ["focus-within"],
      cursor: ['disabled']
    },
  },
  plugins: [],
}
