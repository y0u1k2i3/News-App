import { renderToString } from "react-dom/server";
import express from "express";
import App from "../src/Routes/App.tsx";

const app = express();
const port = 9000;

const apphtml = renderToString(<App />);
const html = createHtml(apphtml);
const createHtml = (component) => `
    <html>
        <div id="root">${component}</div>
        <script src="index.js"></script>
    </html>
    `;

app.use("/", (req, res) => {
  const view = createHtml(html);
  res.send(view);
});

app.listen(port, () => {
  console.log(`News App is built on port ${port}`);
});
