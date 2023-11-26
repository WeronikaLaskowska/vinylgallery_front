import { extendedColors } from "./src/styles/colors";
import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: extendedColors,
    },
  },
  plugins: [],
};
export default config;
