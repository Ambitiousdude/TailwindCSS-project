/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./build/*.html"
  ],
  theme: {
    fontFamily: {
      serif: ['Crimson Text', 'serif'],
      sans: ['DM Sans', 'sans-serif'],
    },
    extend: {
      colors: {
        herowine: "#92003B",
        herowinelight: "#FF7BE5"
      }
    },
  },
  plugins: [],
}

