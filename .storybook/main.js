const path = require('path')

module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    // Handle SCSS modules
    {
      name: "@storybook/preset-scss",
      options: {
        cssLoaderOptions: {
          modules: true,
        },
        sassLoaderOptions: {
          sassOptions: {
            includePaths: [
              path.resolve(__dirname, "../src/**/*.scss"),
              path.resolve(__dirname, "../styles"),
              path.resolve(__dirname, "../node_modules"),
            ],
          },
        },
      },
    },
  ],
  core: {
    builder: "webpack5",
  },
};

