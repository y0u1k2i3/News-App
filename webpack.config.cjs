const path = require("path");
const nodeExternals = require("webpack-node-externals");

module.exports = {
  mode: "development",
  target: "node",
  externals: [nodeExternals()], // node_modules をバンドルしない

  // 環境によってはsrc/index.ts
  entry: "./server/index.js", // ビルド元のファイル
  output: {
    path: path.join(__dirname, "dist"),
    filename: "server.bundle.cjs", // ビルド後のファイル
    libraryTarget: "commonjs2", // CommonJS形式で出力
  },
  experiments: {
    outputModule: true, // Webpack 5 以降で libraryTarget: "module" を有効にする
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: { presets: ["@babel/preset-env"] },
      },
      {
        test: /\.tsx$/, // 環境によっては/\.ts$/
        use: "ts-loader", // TypeScript用のloader
      },
    ],
  },
  resolve: {
    // React × TypeScriptで使う可能性のある拡張子を全て記述
    extensions: [".ts", ".js", ".tsx", ".jsx"],
  },
};
