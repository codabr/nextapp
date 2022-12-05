/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}", "./public/**/*.html"],
  theme: {
    extend: {
      animation: {
        slideRight: "slideRight 1s ease-in",
      },
      keyframes: (theme) => ({
        slideRight: {
          "0%": { opacity: 0, marginLeft: "-600px" },
          "100%": { opacity: 1, marginLeft: "0" },
        },
      }),
    },
    plugins: [],
  },
};
