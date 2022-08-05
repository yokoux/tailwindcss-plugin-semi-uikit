const thsuikit = require("tailwindcss-plugin-ths-uikit");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.vue", "./src/**/*.ts", "./src/**/*.tsx"],
  theme: {
    extend: thsuikit.THSUIKITThemeExtends,
  },
  plugins: [thsuikit.default],
};
