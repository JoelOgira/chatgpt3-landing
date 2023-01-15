/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px", 
      md: "1060px",
      lg: "1200px", 
      xl: "1700px"
    },
    extend: {
      colors: {
        colorBg: '#040C18',
        colorFooter: '#031B34',
        colorBlog: '#042c54',
        colorText: '#81AFDD',
        colorSubtext: '#FF8A71'
      }
    },
  },
  plugins: [],
}