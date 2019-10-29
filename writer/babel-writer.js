const fs = require('fs');
const { writeJson } = require('./writer');

const babelWriter = (path) => {
  const cont = fs.readFileSync('template/.babelrc', 'utf8');
  writeJson(cont, path);
};

module.exports = { babelWriter };