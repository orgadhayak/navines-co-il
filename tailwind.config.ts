import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#070708",
        graphite: "#101114",
        steel: "#171a1f",
        navred: "#8b5cf6",
        glowred: "#d8b4fe",
        silver: "#d8dde6",
      },
      boxShadow: {
        premium: "0 24px 90px rgba(0,0,0,0.36)",
        glow: "0 0 60px rgba(139,92,246,0.28)",
      },
      borderRadius: {
        premium: "22px",
      },
    },
  },
  plugins: [],
};

export default config;
