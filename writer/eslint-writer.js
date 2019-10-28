const fs = require('fs');
const { writeJson } = require('./writer');

const eslintWriter = (path) => {
  const cont = fs.readFileSync('template/.eslintrc', 'utf8');
  writeJson(cont, path);
};

module.exports = { eslintWriter };