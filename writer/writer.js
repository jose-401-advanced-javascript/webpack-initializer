const write = (str, path) => {
  console.log(str, path);
  
};

const writeJson = (obj, path) => {
  console.log(obj, path);
};

module.exports = {
  write,
  writeJson
};