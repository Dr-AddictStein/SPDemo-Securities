/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-blue": "rgb(10, 88, 202)",
      },
      borderWidth: {
        1: "1px",
      },
    },
  },
  plugins: [require("daisyui")],
};

