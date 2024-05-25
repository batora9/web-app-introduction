import http from "http"; // httpモジュールを読み込む

const server = http.createServer((req, res) => { // http.createServerはHTTPサーバを作成するメソッド
  res.writeHead(200, { "Content-Type": "text/plain" }); // res.writeHeadはレスポンスヘッダを書き出すメソッド 200はステータスコード 200は成功を意味する
  res.end("Hello, Node.js!"); // resとはレスポンスのこと endはレスポンスの中身を書き出すメソッド
});

server.listen(8000); // server.listenはサーバを起動するメソッド