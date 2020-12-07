const fs = require('fs');

const getPosition = (rowString) => {
  let min = 0;
  let max = Math.pow(2, rowString.length) - 1;
  rowString.split('').forEach(char => {
    if (char === 'F' || char === 'L') {
      max = Math.floor(min + (max - min) / 2);
    } else {
      min = Math.ceil(min + (max - min) / 2);
    }
  });

  return min;
};

const go = (inputFile) => {
  const lines = fs.readFileSync(inputFile).toString().split('\n');
  let maxId = 0;
  lines.forEach(line => {
    const row = getPosition(line.substr(0, 7));
    const seat = getPosition(line.substr(7, 3));
    const id = row * 8 + seat;
    maxId = Math.max(maxId, id);
    // console.log(row, seat, id);
  });

  return maxId;
};


module.exports.go = go;


console.log('Part One: ', go('test2.txt'));
// console.log('Part Two: ');