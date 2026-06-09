/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#1f2933",
        paper: "#fbfaf7",
        line: "#ded8cc",
        brand: {
          50: "#fff5f2",
          100: "#fee7df",
          600: "#b3352c",
          700: "#8f251f",
          800: "#6f1f1a"
        },
        moss: {
          50: "#f4f7ef",
          700: "#4f6f42"
        },
        premium: {
          100: "#fff1bf",
          500: "#c88b10",
          700: "#845a06"
        }
      },
      fontFamily: {
        sans: [
          "Merriweather Sans",
          "ui-sans-serif",
          "system-ui",
          "Segoe UI",
          "sans-serif"
        ],
        serif: ["Georgia", "Cambria", "Times New Roman", "serif"]
      },
      boxShadow: {
        soft: "0 12px 32px rgba(31, 41, 51, 0.08)"
      }
    }
  },
  plugins: []
};
