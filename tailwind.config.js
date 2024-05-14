const colors = require('tailwindcss/colors')

module.exports = {
      content: ["./**/*.{html, js}"],
  theme: {
     
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    fontFamily: {
      sans: ['Antic Didone', 'serif'],
      sans: ['BIZ UDPMincho', 'serif'],
      sans: ['Fredoka', 'sans-serif'],
      sans: ['Merriweather', 'serif'],
      sans: ['Outfit', 'sans-serif'],
      sans: ['Poppins', 'sans-serif'],
    },
    extend: {
        colors: {
          transparent: '#ffffff00',
          'cream': '#dad7d2',
          'wood-brown': '#302724',
          'coffee-brown': '#796e68',
          'white': '#FFFFFF',
          'leaf-green': '#62762e',
          'gold': '#fff2cc',
          'black': '#000000',
          'royalblue': '#4169e1', 
          'blue': '#0000FF',
          'lightblue': '#ADD8E6',
          'darkblue': '##0e166f',
          gray: colors.neutral, 
      },
    },
  },
  plugins: [
     
  ],
}


// 'gold': '#FFD700',