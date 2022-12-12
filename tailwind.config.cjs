/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'primary-200': 'hsl(193, 38%, 86%)',
        'primary-400': 'hsl(150, 100%, 66%)',
        'neutral-600': 'hsl(217, 19%, 38%)',
        'neutral-800': 'hsl(217, 19%, 24%)',
        'neutral-900': 'hsl(218, 23%, 16%)',
      },
      fontSize: {
        quote: '28px',
      },
      fontFamily: {
        primary: "'Manrope', sans-serif",
      },
      boxShadow: {
        primary: '0px 0px 20px 0px hsl(150, 100%, 66%)',
      },
    },
  },
  plugins: [],
}
