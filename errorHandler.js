var fs = require("fs");
var path = require('path');

var handleError = function (err, res, staticPath) {
    var staticPath = path.resolve(__dirname, staticPath);
    console.log('The staticPath is: ' + staticPath);
    fs.readFile("app/404.html", function (err, data) {
        res.setHeader("Content-Type", "text/html");
        res.writeHead(404);
        res.end(data);
    });
};

module.exports = handleError;
