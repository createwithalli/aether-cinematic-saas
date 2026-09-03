import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        void: "#05060a",
        ink: "#0b0d14",
        foil: "#e8d5b5",
        aurora: "#7ee0d6",
        flare: "#c084fc",
        ember: "#ff8a65",
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 80px -20px rgba(126, 224, 214, 0.45)",
        foil: "0 20px 60px -24px rgba(232, 213, 181, 0.35)",
      },
    },
  },
  plugins: [],
};

export default config;
