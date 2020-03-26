const fs = require("fs");
const path = require('path');

const handleError = function (err, res, statPath) {
  const staticPath = path.resolve(__dirname, statPath);
  
  console.log('The staticPath is: ' + staticPath);
    
  fs.readFile("app/404.html", (err, data) => {
    res.setHeader("Content-Type", "text/html");
    res.writeHead(404);
    res.end(data);
  });
};

module.exports = handleError;
