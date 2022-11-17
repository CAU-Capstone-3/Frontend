/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: "#0A6DDF",
        brand_text: "#ffffff",
        brand_back: "#312e81",
        brand_comment: "#EEF3F6",
        header: "#EEF3FF",
        list_head: "#707070",
      },
    },
  },
  plugins: [],
};
