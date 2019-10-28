const fs = require('fs');
const { writeJson } = require('./writer');

const packageJsonWriter = (path) => {
  const cont = fs.readFileSync('template/webpack.config.js', 'utf8');
  writeJson(cont, path);
};

module.exports = { packageJsonWriter };