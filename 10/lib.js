const fs = require('fs');

const go = (inputFile) => {
  const lines = fs.readFileSync(inputFile).toString().split('\n');
  if (lines[lines.length - 1] === '') lines.pop();

  const values = lines.map(line => parseInt(line)).sort((a, b) => a - b);
  values.unshift(0);
  const diff = { 1: 0, 3: 0 };
  
  for (let i=1; i < values.length; i++) {
    diff[values[i] - values[i - 1]] += 1;
  }
  diff[3]++;
  return diff[1] * diff[3];
};

module.exports.go = go;

console.log('Part One:', go('test2.txt'));
// console.log('Part Two: ');