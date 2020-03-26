var errorHandler = require("./errorHandler");
var extract = require("./extract");
var fs = require("fs");
var http = require("http");
var mime = require("mime");
var wss = require("./websockets-server");

var server = http.createServer(function (req, res) {
    console.log("Responding to a request");

    var filePath = extract(req.url);
    var mimeType = mime.getType(req.url) || "text/html";
    console.log('The req.url is: ' + req.url);
    console.log('The mimeType is: ' + mimeType);
    fs.readFile(filePath, function (err, data) {
        if (err) {
            errorHandler(err, res, "app");
            return;
        } else {
            res.setHeader("Content-Type", mimeType);
            res.end(data);
        }
    });
});

server.listen(3000);
