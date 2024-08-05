module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        "gradient-background": "gradientBackground 15s ease infinite",
      },
      keyframes: {
        gradientBackground: {
          "0%": { backgroundPosition: "0% 0%" },
          "50%": { backgroundPosition: "100% 100%" },
          "100%": { backgroundPosition: "0% 0%" },
        },
      },
      backgroundSize: {
        "400p": "400% 400%",
      },
    },
  },
  plugins: [],
};
