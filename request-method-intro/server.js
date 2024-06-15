import http from "http";

const server = http.createServer((req, res) => {
    // レスポンスのヘッダーを設定
    const headers = {
        "Content-Type": "text/plain",
    };
    // リクエストのメソッドによって処理を分岐
    if (req.method === "GET") {
        res.writeHead(200, headers);
        res.end("Hello, World!\n");
    } else 
    if (req.method === "POST") {
        res.writeHead(200, headers);
        res.end("Received POST request\n");
    } else {
        res.writeHead(404, headers);
        res.end("404 Not Found\n");
    }
});

server.listen(8000, () => {
    console.log("Server running on port 8000");
});