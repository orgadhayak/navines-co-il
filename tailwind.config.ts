import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["selector", ".theme-dark"],
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0F172A",
        graphite: "#475569",
        steel: "#E2E8F0",
        navred: "#0284C7",
        glowred: "#0369A1",
        silver: "#64748B",
      },
      boxShadow: {
        premium: "0 18px 45px rgba(15,23,42,0.08)",
        glow: "0 12px 30px rgba(2,132,199,0.12)",
      },
      borderRadius: {
        premium: "12px",
      },
    },
  },
  plugins: [],
};

export default config;
