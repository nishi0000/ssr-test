module.exports = {
    entry: "./src/index.tsx",
  output: {
    path: `${__dirname}/server`,
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
  experiments: {
    outputModule: true, // 新しいWebpackバージョンで必要な設定
  },
  mode: "development",
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]', // 出力ファイルの名前を設定
              outputPath: 'images/', // 出力ディレクトリを設定
            },
          },
        ]
      },
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

