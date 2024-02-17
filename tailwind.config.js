/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'mono': ['Roboto Mono', 'monospace'],
      'poppins': ['Poppins', 'monospace']
    },
    extend: {},
  },
  plugins: [],
}

