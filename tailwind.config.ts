import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#070708",
        graphite: "#101114",
        steel: "#171a1f",
        navred: "#e11d2e",
        glowred: "#ff3b4e",
        silver: "#d8dde6",
      },
      boxShadow: {
        premium: "0 24px 90px rgba(0,0,0,0.36)",
        glow: "0 0 60px rgba(225,29,46,0.22)",
      },
      borderRadius: {
        premium: "8px",
      },
    },
  },
  plugins: [],
};

export default config;
