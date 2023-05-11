/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: '#fff',
      black: '#000',
      red: '#ff1616',
      brown: '#a7968e',
      grey: '#545454'
    },
    extend: {
      animation: {
        'slideIn': 'slideIn 0.5s ease-in-out',
        'slideOut': 'slideOut 0.5s ease-in-out'
      },
      keyframes: {
        slideIn: {
          '0%': {
            left: '-300px',
            opacity: '0',
          },
          '100%': {
            left: '0px',
            opacity: '1',
          },
        },
        slideOut: {
          '0%': {
            left: '0px',
            opacity: '1',
          },
          '100%': {
            left: '-300px',
            opacity: '0',
          },
        },
      },
      boxShadow: {
        'custom': '2px 2px 5px 1px #5c5c5e',
        'input': 'rgb(92, 92, 94) 2px 2px 5px 1px;'
      },
      spacing: {
        'nav-large': '70px',
        'nav-small': '50px',
      },
      width:{
        'drawer': '245px'
      }
    },
  },
  plugins: [],
}