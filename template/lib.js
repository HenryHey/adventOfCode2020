const fs = require('fs');

const go = (inputFile) => {
  const lines = fs.readFileSync(inputFile).toString().split('\n');
  if (lines[lines.length - 1] === '') lines.pop();

  lines.forEach(line => {

  });
};


module.exports.go = go;


// console.log('Part One: ');
// console.log('Part Two: ');