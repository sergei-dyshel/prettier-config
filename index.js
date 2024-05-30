// @ts-check

/** @type {import("prettier").Config} */
module.exports = {
  // must preserve order of plugins, otherwise jsdoc plugin is not working
  plugins: ["prettier-plugin-organize-imports", "prettier-plugin-jsdoc"],
  printWidth: 100,
};
