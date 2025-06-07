import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        vcr: ["VCR", "sans-serif"],
        helvetica: ["Helvetica", "Arial", "sans-serif"],
      },
      colors: {
        vhsGreen: "#00ff99",
        vhsPurple: "#d11aff",
        vhsBlue: "#00e0ff",
        crtBlack: "#0a0a0a",
      },
      boxShadow: {
        "vhs-glow": "0 0 4px #00ff99, 0 0 8px #00ff99, 0 0 12px #00ff99",
      },
    },
  },
  plugins: [],
};

export default config;
