const fs = require('fs');

const write = (str, path) => {
  fs.writeFileSync(path, str);
  console.log(path);
};

const writeJson = (obj, path) => {
  const json = JSON.stringify(obj);
  fs.writeFileSync(path, json);
  console.log(path);
};

module.exports = {
  write,
  writeJson
};