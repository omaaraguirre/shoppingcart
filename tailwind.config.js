/** @type {import('tailwindcss').Config} */
export default {
  content: ['index.html', './src/**/*.jsx'],
  theme: {
    extend: {
      fontFamily: {
        Orbitron: ['Orbitron Variable', 'sans-serif'],
        Comfortaa: ['Comfortaa Variable', 'sans-serif']
      }
    }
  },
  plugins: []
}
