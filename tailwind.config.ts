import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "sa-light-bg": "var(--sa-light-bg)",
        "sa-light-accent": "var(--sa-light-accent)",
        "sa-light-primary": "var(--sa-light-primary)",
        "sa-light-foreground": "var(--sa-light-foreground)",
        "sa-light-text-main": "var(--sa-light-text-main)",
        "sa-light-text-low": "var(--sa-light-text-low)",

        "sa-dark-bg": "var(--sa-dark-bg)",
        "sa-dark-accent": "var(--sa-dark-accent)",
        "sa-dark-primary": "var(--sa-dark-primary)",
        "sa-dark-foreground": "var(--sa-dark-foreground)",
        "sa-dark-text-main": "var(--sa-dark-text-main)",
        "sa-dark-text-low": "var(--sa-dark-text-low)",

        "sa-blue": "var(--sa-blue)",
        "sa-blue2": "var(--sa-blue2)",
      },
      animation: {
        blob: "blob 7s infinite",
      },
      keyframes: {
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "33%": {
            transform: "translate(30px, -50px) scale(1.1)",
          },
          "66%": {
            transform: "translate(-20px, 20px) scale(0.9)",
          },
          "100%": {
            transform: "translate(0px, 0px) scale(1)",
          },
        },
      },
    },
  },
  plugins: [],
};

export default config;
