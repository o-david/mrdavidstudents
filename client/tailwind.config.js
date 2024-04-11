/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        pry: "#E8B4B8",
        sec: "#EED6D3",
        sec2: "#A49393",
        sec3: "#67595E",
      },
    },
  },
  plugins: [],
};
