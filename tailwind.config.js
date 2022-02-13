module.exports = {
  content: ["./public/**/*.{html, js}", "./src/**/*.{html, js, css}"],
  theme: {
    extend: {},
    colors: {
      "primary-100": "hsl(220, 98%, 61%)",
      "light-100": "hsl(0, 0%, 98%)",
      "light-200": "hsl(236, 33%, 92%)",
      "light-300": "hsl(233, 11%, 84%)",
      "light-400": "hsl(236, 9%, 61%)",
      "light-500": "hsl(235, 19%, 35%)",
      "dark-100": "hsl(235, 21%, 11%)",
      "dark-200": "hsl(235, 24%, 19%)",
      "dark-300": "hsl(234, 39%, 85%)",
      "dark-400": "hsl(236, 33%, 92%)",
      "dark-500": "hsl(234, 11%, 52%)",
      "dark-600": "hsl(233, 14%, 35%)",
      "dark-700": "hsl(237, 14%, 26%)",
      transparent: "transparent",
      white: "#fff",
    },
    backgroundImage: {
      "primary-200": "linear-gradient(hsl(192, 100%, 67%), hsl(280, 87%, 65%))",
      "primary-300": "linear-gradient(red, yellow)",
    },
    fontFamily: {
      josefin: ['"Josefin Sans"', "sans-serif"],
    },
    animation: {
      "fade-in": "fadeIn .2s ease-in",
      "fade-out": "fadeOut .2s ease-in-out",
      "slide-in": "slideIn .2s ease-in-out",
      "slide-left": "slideIn .2s ease-in-out",
    },
    keyframes: {
      fadeIn: {
        "0%": { opacity: "0" },
        "100%": { opacity: 1 },
      },
      fadeOut: {
        "0%": { opacity: 1 },
        "100%": { opacity: 0 },
      },
      slideIn: {
        "0%": { transform: "translateY(-20px)", opacity: "0" },
        "100%": { transform: "translateY(0px)", opacity: "1" },
      },
      slideLeft: {
        "0%": { transform: "translateX(-20px)", opacity: "0" },
        "100%": { transform: "translateX(0px)", opacity: "1" },
      },
    },
  },
  plugins: [],
};
