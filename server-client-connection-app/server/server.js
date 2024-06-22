import { serve } from "@hono/node-server";
import { Hono } from "hono";
import { cors } from "hono/cors";

const app = new Hono();

// CORSの設定
app.use(
  "*",
  cors({
    origin: "null",
  })
);

// ルートパスにアクセスしたときの処理
app.get("/", (c) => {
  return c.text("Hello from Node.js server!");
});

// サーバーを起動する
serve({
  fetch: app.fetch,
  port: 8000,
});
