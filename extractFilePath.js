const path = require('path');

const extractFilePath = url => {
  const fileName = (url.length > 1) ? url.substring(1) : 'index.html';
    
  return path.resolve(__dirname, 'app', fileName);
};

module.exports = extractFilePath;
