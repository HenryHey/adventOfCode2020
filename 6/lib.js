const { groupCollapsed } = require('console');
const fs = require('fs');

const go = (inputFile) => {
  const groups = fs.readFileSync(inputFile).toString().split('\n\n');
  let yesAnswers = 0;

  groups.forEach(group => {
    const groupAnswers = {};
    group.split('\n').forEach(person => {
      person.split('').forEach(question => {
        groupAnswers[question] = true;
      });
    });
    yesAnswers += Object.keys(groupAnswers).length;
  });

  return yesAnswers;
};


const go2 = (inputFile) => {
  const groups = fs.readFileSync(inputFile).toString().split('\n\n');
  groups[groups.length -1] = groups[groups.length -1].replace(new RegExp('\n$'), '')
  let yesAnswers = 0;

  groups.forEach(group => {
    const groupAnswers = {};
    group.split('\n').forEach(person => {
      person.split('').forEach(question => {
        groupAnswers[question] = (groupAnswers[question])
          ? groupAnswers[question]+1
          : 1;
      });
    });
    Object.keys(groupAnswers).forEach(yesQuestion => {
      if (groupAnswers[yesQuestion] === group.split('\n').length) {
        yesAnswers++;
      }
    });
  });

  return yesAnswers;
};

module.exports.go = go;

console.log('Part One: ', go2('test1.txt'));
console.log('Part Two: ', go2('test2.txt'));