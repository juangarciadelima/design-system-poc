/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,md,mdx}"],
  darkMode: ['class', '[data-mode="dark"]'],
  theme: {
    extend: {
      colors: {
        brand: {
          400: '#DE4348',
          600: '#BA303B',
          700: '#971520'
        },
        baseblack: "#26272D",
        gray: {
          100: "#4B4D58",
          200: "#636574",
          300: "#B2B4BD",
          400: "#E6E7EA",
          500: "#EEEFF1",
          600: "#F7F7F8",
        },
        white: "#FFFFFF",
        error: {
          dark: "#941010",
          base: "#DA0505",
          light: "#FB5151",
          lighter: "#F2E4E6"
        },
        success: {
          dark: "#516213",
          base: "#78911D",
          light: "#B1D52A",
          lighter: "#EBEDE3"
        },
        warning: {
          dark: "#826B0D",
          base: "#CDA903",
          lighter: "#F4E0E0"
        }
      }
    },
  },
  plugins: [],
}

