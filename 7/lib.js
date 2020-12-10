const fs = require('fs');

const checkColor = (outerBag, innerBag) => {
}

const go = (inputFile) => {
  const lines = fs.readFileSync(inputFile).toString().split('\n');
  const outerBags = [];

  lines.forEach(line => {
    const bagObject = {};
    bagObject.color = line.split(' bags contain ')[0].trim();
    bagObject.bags = {};
    const inner = line.split(' bags contain ')[1].split(', ');
    inner.forEach(bag => {
      if (bag !== 'no other bags') {
        const qty = bag.split(' ')[0];
        const color = `${bag.split(' ')[1]} ${bag.split(' ')[2]}`;  
        bagObject.bags[color] = qty;
      }
    });

    outerBags.push(bagObject);
  });

  const bagsToCheck = new Set();
  bagsToCheck.add('shiny gold');
  bagsToCheck.forEach(bagToCheck => {
    outerBags.forEach(outerBag => {
      if (bagToCheck,outerBag.bags[bagToCheck]) {
        bagsToCheck.add(outerBag.color);
      }
    });
  });

  return bagsToCheck.size - 1;
};
let counter = 1;
const countInner = (outerBag, color) => {

  Object.keys(outerBag[color]).forEach(bagColor => {
    countIn = countInner(outerBag, bagColor);
    counter += outerBag[color][bagColor] * countIn;
    // console.log(counter);
    return countIn;
  });

  return 1;
};

module.exports.go = go;

console.log('Part One:', go('test2.txt'));
// console.log('Part Two: ');