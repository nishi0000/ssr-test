module.exports = {
    entry: "./src/index.tsx",
  output: {
    path: `${__dirname}/dist`,
    filename: "main.js",
  },
  devServer: {
    static: {
      directory: "./dist",
    },
  },
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"],
  },
  mode: "development",
  module: {
    rules: [
      {
        test: /\.tsx$/,
        use: {
          loader: "ts-loader",
          // options: {
          //   presets: ["@babel/preset-react", "@babel/preset-env","@babel/preset-typescript",],
          // },
        },
        exclude: /node_modules/,
      },
    ],
  },
};
