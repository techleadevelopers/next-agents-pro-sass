import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}", // apps/web/app/
    "./src/**/*.{ts,tsx}", // apps/web/src/
  ],
  theme: {
    extend: {
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        background: { DEFAULT: "#f7f7f7" },
        foreground: { DEFAULT: "#333333" },
        primary: { DEFAULT: "#4682b4" },   // Azul
        secondary: { DEFAULT: "#7a288a" }, // Roxo escuro
        accent: { DEFAULT: "#87ceeb" },    // Azul claro SkyBlue
        chart: {
          '1': '#4567b7',
          '2': '#7a288a',
          '3': '#87ceeb',
          '4': '#c7b8ea',
          '5': '#ffffff',
        },
      },
      backgroundImage: {
        // Gradiente HUD Brutal - Declarado para reutilização global
        'hud-gradient': 'linear-gradient(to bottom right, theme("colors.primary / 20"), theme("colors.accent / 10"), theme("colors.primary / 20"))',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
