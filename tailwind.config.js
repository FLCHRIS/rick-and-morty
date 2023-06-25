/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        textLight: '#111827',
        backgroundTopLight: '#F3F4F6',
        backgroundLight: '#FFFFFF',

        dead: '#EF4444',
        alive: '#16A34A',
        placeholder: '#9CA3AF',

        textDark: '#F3F4F6',
        backgroundTopDark: '#1F2937',
        backgroundDark: '#111827'
      }
    },
    fontFamily: {
      raleway: 'Raleway'
    }
  },
  plugins: []
}
