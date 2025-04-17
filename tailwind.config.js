/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0017C1",
        error: "#C62828",
        "primary-hover": "#00118F",
        "error-hover": "#A12020",
        light: "#B4B4B7",
      },
      boxShadow: {
        medium:
          "0 2px 1px -1px rgba(0,0,0,0.2),0 1px 1px 0px rgba(0,0,0,0.14),0 1px 3px 0px rgba(0,0,0,0.12)",
      },
    },
    fontFamily: {
      sans: ["Noto Sans JP", "sans-serif"],
      body: [
        "Noto Sans CJK JP DemiLight",
        "ヒラギノ角ゴ Pro W3",
        "Hiragino Kaku Gothic Pro",
        "メイリオ",
        "Meiryo",
        "Osaka",
        "ＭＳ Ｐゴシック",
        "MS PGothic",
        "sans-serif",
      ],
    },
  },
  plugins: [],
};
