const fs = require('fs');
const { write } = require('./writer');

const gitignoreWriter = (path) => {
  const cont = fs.readFileSync('.gitignore', 'utf8');
  write(cont, path);
};

module.exports = { gitignoreWriter };