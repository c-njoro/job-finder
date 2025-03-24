/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        body: ["PoppinsRegular"],

        heading: ["NunitoRegular"],
      },
      colors: {
        primary: "#FDFFF6",
        secondary: "#34D399",
        background: "#294E28",
        backgroundTwo: "#031A09",
        buttonTwo: "#E2F87B",
        button: "#316C40",
        buttonText: "#FFFFFF",
      },
    },
  },
  plugins: [],
};
