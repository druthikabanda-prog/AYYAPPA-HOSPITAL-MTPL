/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'medical-blue': '#0A4275',
        'healthcare-green': '#14B8A6',
        'emergency-red': '#DC2626',
        'clean-white': '#FFFFFF',
        'light-gray': '#F3F4F6'
      }
    },
  },
  plugins: [],
}
