module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      padding: {
        '15px': '15px'
      },
      spacing: {
        '50px': '50px'
      },
      colors: {
        'default-purple': '#9B82E7',
        'default-gray': '#ABABAB',
        'light-gray': '#B3B3B3',
        'description-gray': '#808080'
      }
    },
  },
  plugins: [],
}
