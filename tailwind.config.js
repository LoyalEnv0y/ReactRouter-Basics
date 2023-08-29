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
        primary: '#ff8c37',
        faded: '#FFE1BD',

        simple: '#E17653',
        rugged: '#115E59',
        luxury: '#161616',
      },

      borderWidth: {
        '3': '3px'
      },

      fontFamily: {
        'inter': ['Inter', 'sans-serif']
      },

      scale: {
        '97': '0.97'
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