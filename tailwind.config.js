/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'earth-brown': '#8B5A2B',
        'forest-green': '#228B22',
        'water-blue': '#1E90FF',
        'sand-beige': '#F5DEB3',
        'charcoal': '#36454F',
        'leaf-green': '#71A95A',
        'wood-brown': '#966F33'
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
