const fs = require('fs');
const { write } = require('./writer');

const travisWriter = (path) => {
  const cont = fs.readFileSync('template/.travis.yml', 'utf8');
  write(cont, path);
};

module.exports = { travisWriter };