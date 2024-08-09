import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    fontFamily: {
      sans: ["Manrope", "sans-serif"],
      mono: ["JetBrains Mono", "monospace"],
    },
    extend: {
      colors: {
        "prussian-blue": "#1e293b",
        "old-rose": "#cb8b8c",
        platinum: "#dce1de",
      },
      spacing: {
        "ch-sm": "60ch",
        "ch-md": "80ch",
        "ch-lg": "90ch",
        "ch-xl": "120ch",
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
} satisfies Config;

export default config;
