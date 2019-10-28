const fs = require('fs');
const { writeJson } = require('./writer');

const gitignoreWriter = (path) => {
  const cont = fs.readFileSync('.gitignore', 'utf8');
  writeJson(cont, path);
};

gitignoreWriter('./test.txt');

module.exports = { gitignoreWriter };