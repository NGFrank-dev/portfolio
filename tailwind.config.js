// tailwind.config.js
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
       colors: {
        primary: "1A7ABE",       // vertclaire
        secondary: "#203C79",     // vertfoncé
        text: "#EFB810",        // jaune
        accend: "2D3845",          // grid
        fond: "#FFFFFF",          // blanc
        dernier: "#00000"        // noir
      },

    },
  },
  plugins: [],
}


