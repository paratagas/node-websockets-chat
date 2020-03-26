var WebSocket = require("ws");
var WebSocketServer = WebSocket.Server;
var port = 3001;
var ws = new WebSocketServer({
    port: port
});

var messages = [];

console.log("websocket server started");

ws.on("connection", function (socket, req) {
    console.log("client connection established with IP: " + req.connection.remoteAddress);

    messages.forEach(function (msg) {
        socket.send(msg);
    });

    socket.on("message", function (data) {
        console.log("New message received: " + data);
        messages.push(data);
        ws.clients.forEach(function (clientSocket) {
            clientSocket.send(data);
        });
    });

    socket.on('close', function close() {
        console.log("client connection disconnected with IP: " + req.connection.remoteAddress);
    });
});
