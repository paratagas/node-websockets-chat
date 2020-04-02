const fs = require('fs');

const errorHandler = (err, res, statPath) => {
  console.log('CHAT ERROR');
  console.log(err);
    
  fs.readFile('app/404.html', (err, data) => {
    res.setHeader('Content-Type', 'text/html');
    res.writeHead(404);
    res.end(data);
  });
};

exports.errorHandler = errorHandler;
