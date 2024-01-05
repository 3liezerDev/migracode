/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'syne': ['Sansita Swashed', 'Syne'],
        'grotesk': ['Space Grotesk','Dancing Script']
      },
      backgroundImage: theme => ({
        'gradient-radial': 'radial-gradient(100% 50% at 50% 00%, rgba(0, 163, 255, 0.13) 0, rgba(0, 163, 255, 0) 50%, rgba(0, 163, 255, 0) 100%)',
      })
    }
  },
  plugins: [
    require('tailwindcss-animated')
  ]
};
