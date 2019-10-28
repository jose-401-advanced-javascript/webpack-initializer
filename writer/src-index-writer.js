const fs = require('fs');
const { write } = require('./writer');

const srcIndexWriter = (path) => {
  fs.mkdirSync('./src');
  const js = fs.readFileSync('template/src/index.js', 'utf8');
  const html = fs.readFileSync('template/src/index.html', 'utf8');
  write(js, `${path}/src/index.js`);
  write(html, `${path}/src/index.html`);
};

module.exports = { srcIndexWriter };