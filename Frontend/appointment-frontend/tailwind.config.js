/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/App.jsx",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      backgroundColor: {
        bcButtonHeader: 'rgba(25, 152, 211, 1)',
        bcInputField: 'rgba(245, 245, 245, 1)',
      },
      colors: {
        colorLinkHeader: 'rgba(47, 47, 47, 1)',
        colorButtonHeader: 'rgba(255, 255, 255, 1)',  
        colorTitleLoginPage : 'rgba(0, 0, 0, 1)',
                 
      },
      borderRadius: {
        '7px': '7px',
      },
      lineHeight: {
        'lh': '50px',
        
      }
    },
  },
  plugins: [],
}

