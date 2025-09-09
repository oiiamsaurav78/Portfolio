/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        blob: {
          "0%": { transform: "scale(1)" },
          "33%": { transform: "scale(1.1)" },
          "66%": { transform: "scale(0.9)" },
          "100%": { transform: "scale(1)" },
        },
        floaty: {
          "0%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(12px)" },
          "100%": { transform: "translateY(0)" },
        },
      },
      animation: {
        blob: "blob 8s infinite ease-in-out",
        floaty: "floaty 6s infinite ease-in-out",
      },
      backgroundImage: {
        "purple-gradient":
          "linear-gradient(135deg, rgba(128,0,255,0.85) 0%, rgba(75,0,130,0.9) 50%, rgba(48,0,90,1) 100%)",
        "purple-radial":
          "radial-gradient(circle at 30% 30%, rgba(170,80,255,0.3) 0%, rgba(60,0,120,0.9) 100%)",
      },
    },
  },
  plugins: [],
};
