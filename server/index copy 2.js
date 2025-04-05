import React from "react";
import { renderToString } from "react-dom/server";
import express from "express";
import AppModule from "../src/Routes/App.tsx";

const App = AppModule.default;
const app = express();
const port = 9000;

const apphtml = renderToString(<App />);
// const html = createHtml(apphtml);
const ssrHtml = (component) => `
    <html>
        <div id="root">${component}</div>
        <script src="index.js"></script>
    </html>
    `;

app.get("/", (req, res) => {
  const view = ssrHtml(apphtml);
  res.send(view);
});

app.listen(port, () => {
  console.log(`News App is built on port ${port}`);
});
