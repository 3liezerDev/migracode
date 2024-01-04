/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'syne': ['Sansita Swashed', 'Syne'],
        'grotesk': ['Space Grotesk','Dancing Script']
      }
    }
  },
  plugins: []
};
