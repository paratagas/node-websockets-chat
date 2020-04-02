const errorHandler = require('./server');
const extractFilePath = require('./server');
const http = require('http');
const mime = require('mime');
const fs = require('fs');

const server = http.createServer((req, res) => {
  console.log('Responding to a request');

  const filePath = extractFilePath(req.url, __dirname);
  const mimeType = mime.getType(req.url) || 'text/html';
  
  // console.log(`The req.url is: ${ req.url }`);
  // console.log(`The mimeType is: ${ mimeType }`);
  
  fs.readFile(filePath, (err, data) => {
    if (err) {
      errorHandler(err, res, 'app');
      return;
    } else {
      res.setHeader('Content-Type', mimeType);
      res.end(data);
    }
  });
});

server.listen(3000);
