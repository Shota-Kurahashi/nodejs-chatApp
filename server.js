const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const io = require("socket.io")(server);

server.listen(8000, console.log("start"));

io.on("connection", (socket) => {
  console.log("ユーザーが接続しました");

  socket.on("chat message", (msg) => {
    io.emit("chat message", msg);
  });
});

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});
