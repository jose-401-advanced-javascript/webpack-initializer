const fs = require('fs');
const { writeJson } = require('./writer');

const travisWriter = (path) => {
  const cont = fs.readFileSync('template/.travis.yml', 'utf8');
  writeJson(cont, path);
};

module.exports = { travisWriter };