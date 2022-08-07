import express from "express";
import ReactDom from "react-dom/server";
import { App } from "../App";
import { indexTemplate } from "./indexTemplate";
import axios from "axios";
//импорты сжатия для деплоя
import compression from "compression";
//для безопасности
import helmet from "helmet";

const PORT = process.env.PORT || 3000;
const IS_DEV = process.env.NODE_ENV !== "production";

const app = express();

if (!IS_DEV) {
  app.use(compression());
  app.use(
    helmet({
      contentSecurityPolicy: false,
    }),
    helmet.crossOriginEmbedderPolicy({ policy: "credentialless" })
  );
}

app.use("/static", express.static("./dist/client"));

app.get("*", (req, res) => {
  res.send(indexTemplate(ReactDom.renderToString(App())));
});

app.listen(PORT, () => {
  console.log(`Server started in http://localhost:${PORT}`);
});
