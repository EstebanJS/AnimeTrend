const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const WorkboxPlugin = require('workbox-webpack-plugin');

const shouldAnalyze = process.argv.includes('--analyze')

const plugins = [
  new HtmlWebpackPlugin({
    inject: true,
    template: "./public/index.html",
    filename: "./index.html",
  }),
  new MiniCssExtractPlugin({
    filename: "[name].css",
  }),
  new CleanWebpackPlugin(),
  new CopyPlugin({
    patterns: [
      {
        from: path.resolve(__dirname, "src", "assets/images"),
        to: "assets/images",
      }
    ],
  }),
  new WorkboxPlugin.GenerateSW({
    // these options encourage the ServiceWorkers to get in there fast
    // and not allow any straggling "old" SWs to hang around
    clientsClaim: true,
    skipWaiting: true,
  }),
]

if (shouldAnalyze) {
  const { BundleAnalyzerPlugin } = module.require('webpack-bundle-analyzer')
  plugins.push(new BundleAnalyzerPlugin())
}


module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].bundle.js",
    assetModuleFilename: "assets/images/[hash][ext][query]",
  },
  resolve: {
    extensions: [".js", ".jsx"],
    alias: {
      "@components": path.resolve(__dirname, "src/components/"),
      "@styles": path.resolve(__dirname, "src/styles/"),
      "@images": path.resolve(__dirname, "src/assets/images/"),
      "@icons": path.resolve(__dirname, "src/assets/icons/"),
    },
  },
  mode: "production",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.html$/,
        use: {
          loader: "html-loader",
        },
      },
      {
        test: /\.png/,
        type: "asset/resource",
      },
      {
        test: /\.s[ac]ss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: "svg-url-loader",
            options: {
              limit: 10000,
            },
          },
        ],
      },
    ],
  },
  plugins,
  optimization: {
    minimize: true,
    minimizer: [new CssMinimizerPlugin(), new TerserPlugin()],
    splitChunks: {
      // include all types of chunks
      chunks: "all",
    },
  },
};
