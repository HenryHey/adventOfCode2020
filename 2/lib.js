const fs = require('fs');

const cleanLine = (line) => {
  const lineParams = {};

  let tmp = line.split(':');
  lineParams.pass = tmp[1].trim();
  tmp = tmp[0].split(' ');
  lineParams.char = tmp[1].trim();
  tmp = tmp[0].split('-');
  lineParams.min = tmp[0];
  lineParams.max = tmp[1];

  return lineParams;
};


const checkPasswords = (inputFile) => {
  const fileContent = fs.readFileSync(inputFile).toString().split('\n');
  let correctPassCount = 0;
  fileContent.forEach(line => {
    if (line.length > 0) {
      const lineParams = cleanLine(line);
      let count = 0;
      lineParams.pass.split('').forEach(char => {
        if (char === lineParams.char) {
          count++;
        }
      });

      if (count >= lineParams.min && count <= lineParams.max) {
        correctPassCount++;
      }
    }
  });
  return correctPassCount;
};

const correctLineNew = (line) => {
  if (line.length > 0) {
    const lineParams = cleanLine(line);

    return ( lineParams.pass[lineParams.min - 1] === lineParams.char && lineParams.pass[lineParams.max - 1] !== lineParams.char
          || lineParams.pass[lineParams.min - 1] !== lineParams.char && lineParams.pass[lineParams.max - 1] === lineParams.char );
  }

  return false;
}

const checkPasswordsNew = (inputFile) => {
  const fileContent = fs.readFileSync(inputFile).toString().split('\n');
  let correctPassCount = 0;
  fileContent.forEach(line => {
    if (correctLineNew(line)) {
      correctPassCount++;
    }
  });

  return correctPassCount;
};

module.exports.checkPasswords = checkPasswords;
module.exports.checkPasswordsNew = checkPasswordsNew;
module.exports.correctLineNew = correctLineNew;

const inputFile = './test2.txt';

console.log('Part One: ', checkPasswords(inputFile));
console.log('Part two: ', checkPasswordsNew(inputFile));