const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  entry: "./src/index.tsx",
  devtool: "inline-source-map",

  resolve: {
    extensions: [".tsx", ".ts", ".js", ".mjs", ".cjs"],
    alias: {
      "@/styled-system/patterns": path.resolve(
        __dirname,
        "./styled-system/patterns",
      ),
      "@/styled-system/css": path.resolve(__dirname, "./styled-system/css"),
      "@/styled-system/recipes": path.resolve(
        __dirname,
        "./styled-system/recipes",
      ),
    },
  },

  module: {
    rules: [
      {
        test: /\.(?:js|mjs|cjs|ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            plugins: [],
            presets: [
              "@babel/preset-env",
              [
                "@babel/preset-react",
                {
                  runtime: "automatic",
                },
              ],
              "@babel/preset-typescript",
            ],
            include: ["src/**/*"],
            ignore: ["**/*.d.ts"],
          },
        },
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },

      {
        test: /\.svg$/,
        use: 'svg-react-loader'
      },
      {
        test: /\.(ttf|eot|svg|png|jpg|gif|ico)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file-loader'
      }
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: 'psds',
      template: path.join(__dirname, 'public/index.html'),
      filename: 'index.html'
    })
  ],

  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "build"),
    clean: true,
  },
};
