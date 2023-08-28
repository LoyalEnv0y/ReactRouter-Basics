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
        primary: '#e17653',
        secondary: '#115e59',
        tertiary: '#161616',
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

// colors: {
//   primary: '#ffe1bc',
//     secondary: '#e17653',
//       success: '#115e59',
//         dark: '#161616';
// },