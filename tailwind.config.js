/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1e293b",        // slate-800
        accent: "#6366f1",         // indigo-500
        highlight: "#fbbf24",      // amber-400
        surface: "#f1f5f9",        // slate-100
        darksurface: "#1e293b",    // slate-800
      },
      fontFamily: {
        display: ["Montserrat", "ui-sans-serif", "system-ui"],
        mono: ["JetBrains Mono", "Fira Mono", "Consolas", "monospace"],
      },
    },
  },
  plugins: [],
};