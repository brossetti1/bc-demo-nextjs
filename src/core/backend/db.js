path = require('path');
fs = require('fs');

STORAGE_FILE = path.resolve(__dirname) + '/storage/chainData.json';

const chainData = fs.readFile(STORAGE_FILE, (err, chainData) => {
  if (err) throw err;
  console.log(chainData)
  return JSON.parse(chainData)
});

module.exports = chainData;
