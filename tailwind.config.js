/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}"
  ],
  theme: {
    colors: {
      Orange: "hsl(26, 100%, 55%)",
      "Pale-orange": "hsl(25, 100%, 94%)",
      "Very-dark-blue": "hsl(220, 13%, 13%)",
      "Dark-grayish-blue": "hsl(219, 9%, 45%)",
      "Grayish-blue": "hsl(220, 14%, 75%)",
      "Light-grayish-blue": "hsl(223, 64%, 98%)",
      White: "hsl(0, 0%, 100%)",
      Black: "hsl(0, 0%, 0%)",
      "Black-bg": "hsla(0, 0%, 0%, 0.75)",

      transparent: "transparent"
    }
  },
  plugins: [],
}
