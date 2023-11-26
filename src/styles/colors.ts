import twColors from "tailwindcss/colors";

export const extendedColors = {
  primary: {
    "500": "#33673b",
    "1000": "#000000",
  },
  secondary: {
    "300": "#eff2c0",
    "700": "#bea57d",
  },
  third: {
    "500": "a4bab7",
  },
  fourth: {
    "500": "2f1b25",
  },
  danger: {
    "50": "#fef3ee",
    "100": "#fee3d6",
    "200": "#fbc4ad",
    "300": "#f89b79",
    "400": "#f46843",
    "500": "#f24d2c",
    "600": "#e22814",
    "700": "#bc1b12",
    "800": "#951717",
    "900": "#781716",
    "950": "#41090b",
  },
  warning: {
    "50": "#fdfbe9",
    "100": "#fcf7c5",
    "200": "#faed8e",
    "300": "#f6db4e",
    "400": "#f2ca2c",
    "500": "#e1af11",
    "600": "#c2870c",
    "700": "#9b610d",
    "800": "#804d13",
    "900": "#6d3f16",
    "950": "#402008",
  },
};

export const colors = {
  ...twColors,
  ...extendedColors,
};
