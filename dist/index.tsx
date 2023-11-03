import express from "express";
import React from "react";
import ReactDOMServer from "react-dom/server";
import { App } from "../src/App";

const PORT = process.env.PORT || 9000;
const app = express();

app.get("/", (req, res) => {
  // AppコンポーネントをHTML文字列に変換
  // const app = ReactDOMServer.renderToString(React.createElement(App));
  const app = ReactDOMServer.renderToString(<App />);

  // HTMLに変換されたAppコンポーネントを埋め込んだHTMLを作成
  const html = `
        <html lang="js">
        <head>
        </head>
        <body>
            <div id="root">${app}</div>
            <script src="main.js" async defer></script>
        </body>
        </html>
    `;

  // コンポーネントが埋め込まれたHTMLをレスポンス
  res.send(html);
});

app.use(express.static("./dist"));

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});