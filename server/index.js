import express from "express";
import React from "react";
import ReactDOMServer from "react-dom/server";
import { transformSync } from "@babel/core";
import { App } from "../src/App.tsx";

const PORT = process.env.PORT || 9000;
const app = express();

app.get("/", (req, res) => {
  // AppコンポーネントをHTML文字列に変換
  // const app = ReactDOMServer.renderToString(React.createElement(App));
  const jsxCode = ReactDOMServer.renderToString(
    React.createElement(App)
  );

  // HTMLに変換されたAppコンポーネントを埋め込んだHTMLを作成
  const html = `
        <html lang="ja">
        <head>
        </head>
        <body>
            <div id="root">${jsxCode}</div>
            <script type="module" src="main.js" async defer></script>
        </body>
        </html>
    `;

  // コンポーネントが埋め込まれたHTMLをレスポンス
  res.send(html);
});

app.use(express.static("./server"));

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});