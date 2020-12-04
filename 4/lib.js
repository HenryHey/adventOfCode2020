const fs = require('fs');


const requiredFields = ['byr', 'iyr', 'eyr', 'hgt', 'hcl', 'ecl', 'pid'];

const validPassPort = (passPort) => {
  for (let i=0; i<requiredFields.length; i++) {
    const requiredField = requiredFields[i];
    if (passPort[requiredField] === undefined) {
      return false;
    }
  }

  return true;
};

const go = (inputFile) => {
  let validCounter = 0;
  const passports = fs.readFileSync(inputFile).toString().split('\n\n');

  passports.forEach(passport => {
    const passportFields = passport.replace(new RegExp('\n','g'), ' ').split(' ');

    const passPort = {};
    passportFields.forEach(field => {
      passPort[field.split(':')[0]] = field.split(':')[1];
    });

    if (validPassPort(passPort)) validCounter++;  
  });

  return validCounter;
};


module.exports.go = go;
module.exports.validPassPort = validPassPort;

console.log('Part One: ', go('test2.txt'));
console.log('Part Two: Not implemented');