import { extendedColors } from "./src/styles/colors";
import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: extendedColors,
    },
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1380px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1786px",
      // => @media (min-width: 1536px) { ... }
      
      "3xl": "1850px",
      // => @media (min-width: 1536px) { ... }
    },
  },
  plugins: [],
};
export default config;
