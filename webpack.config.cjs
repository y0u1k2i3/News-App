const path = require("path");
const nodeExternals = require("webpack-node-externals");

module.exports = {
  mode: "development",
  target: "node",
  externals: [
    nodeExternals({ allowlist: ["react", "react-dom", "react-dom/server"] }),
  ], // node_modules をバンドルしない

  // 環境によってはsrc/index.ts
  entry: "./server/index.js", // ビルド元のファイル
  output: {
    path: path.join(__dirname, "dist"),
    filename: "server.bundle.cjs", // ビルド後のファイル
    libraryTarget: "commonjs2", // CommonJS形式で出力
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: { presets: ["@babel/preset-react"] },
      },
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: "ts-loader", // TypeScript用のloader
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  resolve: {
    // React × TypeScriptで使う可能性のある拡張子を全て記述
    extensions: [".ts", ".js", ".tsx", ".jsx"],
    alias: {
      react: path.resolve(__dirname, "node_modules/react"),
    },
  },
};
