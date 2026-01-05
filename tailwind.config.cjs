/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        night: "#0b0f14",
        nightSoft: "#0e141b",
        accent: "#2ee7d6",
        lightBg: "#f7f7fb",
      },
      fontFamily: {
        display: ['"Space Grotesk"', "Inter", "system-ui", "sans-serif"],
        body: ['"Inter"', "system-ui", "sans-serif"],
      },
      boxShadow: {
        glow: "0 10px 40px rgba(46, 231, 214, 0.15)",
      },
    },
  },
  plugins: [],
};
