/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./components/**/*.{js,vue,ts}",
      "./layouts/**/*.vue",
      "./pages/**/*.vue",
      "./plugins/**/*.{js,ts}",
      "./nuxt.config.{js,ts}",
    ],
    theme: {
      extend: {
        colors: {
          brand: {
            50: "#F7F3ED",
            100: "#F0E8DD",
            200: "#E0CFB8",
            300: "#D0B795",
            400: "#C1A071",
            500: "#B1884E",
            600: "#8E6D3E",
            700: "#6A512F",
            800: "#47361F",
            900: "#231B10",
            950: "#120E08"
          },
          // ...
        },
    
      },
    },
    plugins: [],
  }
  