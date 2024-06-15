import http from "http";
import { StringDecoder } from "string_decoder";

const todoList = [
  { title: "JavaScriptを勉強する", completed: false },
  { title: "TODOアプリを自作する", completed: false },
  { title: "漫画を読み切る", completed: true },
  { title: "ゲームをクリアする", completed: false },
];

const server = http.createServer((req, res) => {
  const decoder = new StringDecoder("utf-8");
  let buffer = "";
  
  // リクエストのデータを受け取る
  req.on("data", (data) => {
    buffer += decoder.write(data);
  });

  // リクエストのデータを受け取り終わったらレスポンスを返す
  req.on("end", () => {
    // データの受け取りが終わったらdecoderを終了させる
    buffer += decoder.end();

    // レスポンスのヘッダーを設定
    const headers = {
      "Content-Type": "application/json",
    };

    // リクエストのメソッドとURLによって処理を分岐
    // GETリクエストの場合
    if (req.method === "GET" && req.url === "/") {
      // レスポンスを返す
      res.writeHead(200, headers);
      // JSON形式でデータを返す
      res.end(JSON.stringify(todoList));
    // POSTリクエストの場合
    } else if (req.method === "POST" && req.url === "/") {
      // リクエストのデータをパースして新しいTODOを追加
      try {
        const data = JSON.parse(buffer);
        // タイトルが空の場合はエラーを返す
        if (!data.title) {
          throw new Error("Title must be provided");
        }

        // 新しいTODOを作成
        const newTodo = {
          title: data.title,
          completed: !!data.completed,
        };

        // 新しいTODOをリストに追加
        todoList.push(newTodo);
        // レスポンスを返す
        res.writeHead(200, headers);

        // JSON形式でメッセージを返す
        res.end(JSON.stringify({ message: "Successfully created" }));
      // エラーが発生した場合はエラーメッセージを返す
      } catch (err) {
        res.writeHead(400, headers);
        res.end(JSON.stringify({ message: err.message }));
      }
    } else {
      // どのエンドポイントにもマッチしない場合は404エラーを返す
      res.writeHead(404, headers);
      // JSON形式でメッセージを返す
      res.end(JSON.stringify({ message: "Not Found" }));
    }
  });
});

// サーバーを起動する
server.listen(8000, () => {
  console.log("Server running on port 8000");
});