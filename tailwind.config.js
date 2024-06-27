/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        url: "url('/src/assets/helldivers-2-pc-game-cover-768x432.jpg')",
      },
    },
  },
  plugins: [],
};
