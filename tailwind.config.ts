import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        fresh: "#00C853",
        mint: "#E8F5E9",
        charcoal: "#1A1A2E",
        paper: "#F8F9FA",
        cloud: "#FFFFFF",
        muted: "#78909C",
        border: "#E0E0E0",
      },
      fontFamily: {
        display: ["var(--font-outfit)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
      keyframes: {
        "bubble-rise": {
          "0%": { transform: "translateY(100%) scale(0.4)", opacity: "0" },
          "10%": { opacity: "0.6" },
          "90%": { opacity: "0.3" },
          "100%": { transform: "translateY(-120%) scale(1)", opacity: "0" },
        },
        "fade-up": {
          "0%": { transform: "translateY(32px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        "marquee": {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        "bubble-rise": "bubble-rise 12s ease-in infinite",
        "fade-up": "fade-up 0.7s ease-out forwards",
        "marquee": "marquee 30s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
