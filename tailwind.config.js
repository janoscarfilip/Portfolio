/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'vite-logo': '#646cffaa',
        'travel': 'rgb(239 68 68)',
        'emerald': 'rgb(16 185 129)',
        'text-color': 'var(--text-color)',
        'background-color': 'var(--background-color)',
      },
      dropShadow: {
        'vite-logo': '0 0 2em #646cffaa',
        'travel': '0 0 2em rgb(239 68 68)',
        'emerald': '0 0 2em rgb(16 185 129)',
      }
    },
  },
  plugins: [],
}