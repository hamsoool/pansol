import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        linen: "#F5EFE3",
        stone: "#E9DEC7",
        ink: {
          DEFAULT: "#3B2E22",
          light: "#5B4A38",
        },
        clay: "#8B7457",
        rule: "#C3B291",
        pool: {
          light: "#A38A6D",
          DEFAULT: "#8B7457",
          dark: "#68543C",
        },
        char: "#211812",
      },
      borderRadius: {
        none: "0px",
        xs: "0.5rem",    // 8px
        sm: "0.75rem",   // 12px
        DEFAULT: "1rem", // 16px
        md: "1.25rem",   // 20px
        lg: "1.5rem",    // 24px
        xl: "1.75rem",   // 28px
        "2xl": "2rem",   // 32px
        "3xl": "2.5rem", // 40px
        full: "9999px",
      },
      fontFamily: {
        display: ["var(--font-playfair)", "Georgia", "serif"],
        sans: ["var(--font-plus-jakarta)", "-apple-system", "BlinkMacSystemFont", "sans-serif"],
        serif: ["var(--font-playfair)", "Georgia", "serif"],
      },
      letterSpacing: {
        widest2: "0.28em",
      },
      screens: {
        "3xl": "1920px",
        "4xl": "2560px",
      },
      maxWidth: {
        content: "1860px",
        "content-wide": "2180px",
      },
      keyframes: {
        rise: {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        rise: "rise 0.9s cubic-bezier(0.22,1,0.36,1) forwards",
      },
    },
  },
  plugins: [],
};
export default config;
