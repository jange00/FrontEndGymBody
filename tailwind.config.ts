/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      'blue': '#1fb6ff',
      'white':'#FFFFFF',
      'black':'#000000',
      'purple': '#7e5bef',
      'pink': '#ff49db',
      'orange': '#ff7849',
      'green': '#13ce66',
      'yellow': '#ffc82c',
      'gray-dark': '#273444',
      'gray': '#8492a6',
      'gray-light': '#d3dce6',
      'primary':'#002A87',
      'planPrimary':'#002a87',
      'loginbgcolor':'#ECE9E9',
      'red':'#FF0000'
    },
    fontFamily: {
      sans: ['Raleway', 'Raleway'],
      serif: ['Raleway', 'Raleway','Raleway'],
    },
    extend: {
      backgroundImage:theme =>({
        'landing':"url('/assets/landing.jpg')",
        'custom-gradient': 'linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(0,42,135,1) 100%)',
        'custom-gradient2':'linear-gradient(180deg, rgba(0,42,135,1) 0%, rgba(0,0,0,1) 100%)',
        'custom-gradient3': 'linear-gradient(270deg, rgba(0,42,135,1) 0%, rgba(0,0,0,1) 100%)',
        
      }),
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      }
    }
  },
  plugins: [],
}

