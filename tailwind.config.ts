import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["selector", ".theme-dark"],
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#17253D",
        graphite: "#526078",
        steel: "#D8E0EB",
        navred: "#0F6CBD",
        glowred: "#0F6CBD",
        silver: "#66758C",
      },
      boxShadow: {
        premium: "0 16px 40px rgba(23,37,61,0.10)",
        glow: "0 12px 30px rgba(15,108,189,0.14)",
      },
      borderRadius: {
        premium: "8px",
      },
    },
  },
  plugins: [],
};

export default config;
