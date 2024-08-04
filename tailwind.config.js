/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'emerald': 'rgb(16 185 129)',
        'text-color': 'var(--text-color)',
        'background-color': 'var(--background-color)',
      },
        'emerald': '0 0 2em rgb(16 185 129)',
      }
    },
  },
  plugins: [],
}