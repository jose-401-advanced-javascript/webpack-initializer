const fs = require('fs');
const { write } = require('./writer');

const webpackWriter = (path) => {
  const cont = fs.readFileSync('template/package.json', 'utf8');
  write(cont, path);
};

module.exports = { webpackWriter };