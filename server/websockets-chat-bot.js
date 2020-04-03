var WebSocket = require("ws");
var chatClient = new WebSocket('http://localhost:3001');
var botName = "Bot";

chatClient.on('open', function open() {
    chatClient.send('bot connection opened');
});

chatClient.on('message', function (data) {
    console.log("bot received message: " + data);

    // is someone contact "Bot" it answers
    if (data.indexOf(botName) >= 0) {
        chatClient.send('bot answered');
    }
});
