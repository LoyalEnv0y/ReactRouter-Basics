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
        tertiary: '#fb923c',
        success: '#16a34a',
        warning: '#facc15',
        danger: '#dc2626',
        dark: '#171717'
      }
    },
  },
  plugins: [],
};

// #f97316