const { installer } = require('./installer');

const deps = [
  'react',
  'react-dom'
];

const dependenciesInstaller = (path) => {
  installer(path, deps, false);
};

module.exports = {
  dependenciesInstaller
};