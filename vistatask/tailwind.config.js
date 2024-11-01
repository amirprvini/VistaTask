export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      width: {
        'calc-100-minus-14rem': 'calc(100% - 14rem)', // Custom width utility
      },
      
    },
  },
  plugins: [],
}
