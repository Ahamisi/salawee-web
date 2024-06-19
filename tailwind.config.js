/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        backgroundColor: '#56f5a4',  // new background color
        brightYellow: '#e0ff01',
        oliveGreen: '#787664',
        black: '#000',
        lightGrayish: '#cac4b7',
        white: '#f8f8f8',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
