/* import begin */

const { errorHandler } = require('./errorHandler');
const { extractFilePath } = require('./extractFilePath');
const wss = require('./websockets-server'); // run websocket server

/* import end */


/* export begin */

module.exports = errorHandler;
module.exports = extractFilePath;

/* export end */
