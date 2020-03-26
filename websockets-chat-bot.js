const WebSocket = require("ws");
const chatClient = new WebSocket('http://localhost:3001');
const botName = "Bot";

chatClient.on('open', function open() {
  chatClient.send('bot connection opened');
});

chatClient.on('message', data => {
  console.log("bot received message: " + data);

  // is someone contact "Bot" it answers
  if (data.indexOf(botName) >= 0) {
    chatClient.send('bot answered');
  }
});
