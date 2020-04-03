const fs = require('fs');

const errorHandler = (err, res) => {
  fs.readFile('app/404.html', (err, data) => {
    res.setHeader('Content-Type', 'text/html');
    res.writeHead(404);
    res.end(data);
  });
};

module.exports = errorHandler;
