const path = require('path');

const extractFilePath = (url, dirname) => {
  const fileName = (url.length > 1) ? url.substring(1) : 'index.html';
  
  return path.resolve(dirname, 'app', fileName);
};

exports.extractFilePath = extractFilePath;
