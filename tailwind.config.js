/** @type {import('tailwindcss').Config} */
export default {
  mode: 'jit',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0284c7',
        secondary: '#3f3f46',
        tertiary: '#f97316',
        success: '#16a34a',
        warning: '#E0A801',
        danger: '#dc2626',
        dark: '#171717'
      },

      borderWidth: {
        '3': '3px'
      },

      fontFamily: {
        'inter': ['Inter', 'sans-serif']
      }
    },
  },
  plugins: [],
};