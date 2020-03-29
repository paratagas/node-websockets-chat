const WebSocket = require('ws');
const chatClient = new WebSocket('http://localhost:3001');
const botName = 'Bot';

chatClient.on('open', () => {
  chatClient.send('bot connection opened');
});

chatClient.on('message', data => {
  console.log(`bot received message: ${data}`);

  // is someone contacts "Bot" it answers
  if (data.includes(botName)) {
    chatClient.send('bot answered');
  }
});
