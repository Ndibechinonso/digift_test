module.exports = {
  mode: 'jit',
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        'md': '0px 2px 0px #5CA5FF',
        "lg": '0px 12px 0px #5CA5FF'
      }
    },
    colors: {
      "navcolor": "#8A91A8",
      "inputbg": "#F3F4F7",
      "btnblue": "#0078FF",
      "white": "#FFFFFF",
      "herobg": "#0069E0",
      "arrivalbg": "#F5F7FA",
      "arrivalheader": "#000429",
      "arrivalfilters": "#8A91A8",
      "giftcolor": "#6F6F80",
      "positioncolor": "#68718D",
      "cardborder": "#EBEFF5",
      "uspcontent": "linear-gradient(180deg, #0073F5 0%, #006BE0 100%)",
      "plainbtn" : "#F5F7FA",
      "featcardcolor": "#C2DDFF"
    }
  },
  plugins: [],
};
