/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Open Sans", "sans-serif"],
        raleway: ["Raleway", "sans-serif"],
      },
      colors: {
        'Dark-Blue-1': 'hsl(217, 28%, 15%)',
        'Dark-Blue-2': 'hsl(218, 28%, 13%)',
        'Dark-Blue-3': 'hsl(216, 53%,  9%)',
        'Dark-Blue-4': 'hsl(219, 30%, 18%)',
        
        'Cyan': 'hsl(176, 68%, 64%)',
        'Blue': 'hsl(198, 60%, 50%)',
        'Light-Red': 'hsl(0, 100%, 63%)'
      },
    },
  },
  plugins: [],
}

