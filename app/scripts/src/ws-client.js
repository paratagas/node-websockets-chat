let socket;

function init(url) {
  socket = new WebSocket(url);
  console.log('connecting...');
}

function registerOpenHandler(handlerFunction) {
  socket.onopen = () => {
    console.log('open');
    handlerFunction();
  };
}

function registerMessageHandler(handlerFunction) {
  socket.onmessage = (e) => {
    console.log(`message: $ { e.data }`);
    const data = JSON.parse(e.data);
    handlerFunction(data);

    if (e.data.includes('do_close')) {
      socket.close();
    }
  };
}

function registerCloseHandler(handlerFunction) {
  socket.onclose = () => {
    console.log('close');
    handlerFunction();
  };
}

function sendMessage(payload) {
  socket.send(JSON.stringify(payload));
}

export default {
  init,
  registerOpenHandler,
  registerMessageHandler,
  registerCloseHandler,
  sendMessage,
}
