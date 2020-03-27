const WebSocket = require('ws');
const WebSocketServer = WebSocket.Server;
const port = 3001;
const ws = new WebSocketServer({ port });

let messages = [];

console.log('websocket server started');

ws.on('connection', (socket, req) => {
  console.log(`client connection established with IP: ${req.connection.remoteAddress}`);

  messages.forEach(msg => {
    socket.send(msg);
  });

  socket.on('message', data => {
    console.log(`New message received: ${data}`);
    
    messages.push(data);
    
    ws.clients.forEach(clientSocket => {
      clientSocket.send(data);
    });
  });

  socket.on('close', function close() {
    console.log(`client connection disconnected with IP: ${req.connection.remoteAddress}`);
  });
});
