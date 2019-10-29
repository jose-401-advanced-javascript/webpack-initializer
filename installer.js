const { execSync } = require('child_process');

const installer = (path, deps, devD) => {
  if(devD) {
    execSync(`npm i -D ${deps.join(' ')}`, {
      cwd: path,
      studio: 'inherit'
    });
  }
  else {
    execSync(`npm i ${deps.join(' ')}`, {
      cwd: path,
      studio: 'inherit'
    });
  }
};

module.exports = {
  installer
};