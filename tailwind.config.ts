import type { Config } from "tailwindcss";
// const { nextui } = require("@nextui-org/react");
import { nextui } from "@nextui-org/react";
const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        banana: ['"Banana-grotesk"', "sans-serif"],
        youth: ['"Youth"', "sans-serif"],
        "dm-serif-display": ['"DM Serif Display"', "serif"],
      },
      width: {
        mobile: "390px",
      },
      borderWidth: {
        "1.5": "1.5px",
      },
      borderColor: {
        basic: "var(--border-color)",
      },
      borderRadius: {
        "20": "20px",
        "70": "70px",
        "32": "32px",
        "1.5": "1.5px",
      },
      colors: {
        cta: "#074A6A",
        "cta-darker": "#022D42",
        secondary: "var(--filtered-btn-secondary)",
        primary: "var(--filtered-btn-active)",
        "light-gray": "var(--light-text)",
        basic: "var(--border-color)",
        bestseller: "var(--bg-bestseller)",
      },
      padding: {
        "15": "60px",
      },
      zIndex: {
        100: "100",
        200: "200",
        300: "300",
        400: "400",
        500: "500",
        999: "999", // Navbar
        1000: "1000", // Listing Individual property
      },
    },
  },
  plugins: [
    nextui({
      themes: {
        light: {
          // ...
          colors: {
            secondary: "#022D42",
          },
        },
      },
    }),
  ],
};
export default config;
