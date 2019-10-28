const fs = require('fs');
const { writeJson } = require('./writer');

const webpackWriter = (path) => {
  const cont = fs.readFileSync('template/package.json', 'utf8');
  writeJson(cont, path);
};

module.exports = { webpackWriter };