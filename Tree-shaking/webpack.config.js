const path = require("path");
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");

module.exports = {
  mode: "production",

  entry: "./index.js",

  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    clean: true,
  },

  optimization: {
    usedExports: true,
    minimize: false,
    concatenateModules: false,
  },

  plugins: [new BundleAnalyzerPlugin()],
};
