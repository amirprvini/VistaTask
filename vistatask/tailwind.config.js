export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      width: {
        'calc-100-minus-14rem': 'calc(100% - 16rem)', // Custom width utility
      },

      fontFamily: {
      'sans': ['ui-sans-serif', 'system-ui'],
      'serif': ['ui-serif', 'Georgia'],
      'mono': ['ui-monospace', 'SFMono-Regular',],
      'display': ['Oswald'],
      'body': ['"Open Sans"'],
      'poppins' : ["poppins" , "sans"],
      'roboto': ["roboto" , "sans"],
      'open-sans' : ["open-sans" , "sans"] , 
      'montserrat' : ["montserrat","sans"]
    },

    colors: {
        sideBarButtonColor: "#D7D7D7" ,
      }
      
    },
  },
  plugins: [],
}
