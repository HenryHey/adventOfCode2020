const fs = require('fs');

const traverseForest = (inputFile, slopeRight, slopeDown) => {
  const rows = fs.readFileSync(inputFile).toString().split('\n');
  const forest = [];
  let currentRow = 0;
  let currentCol = 0;
  let treeCount = 0;

  for(let i=0; i<rows.length; i++) {
    forest[i] = [];
    for (let j=0; j<rows[i].length; j++) {
      forest[i][j] = rows[i][j];
    }
  }

  while (currentRow < forest.length) {
    if (forest[currentRow][currentCol] === '#') {
      treeCount++;
    }
    currentCol = (currentCol + slopeRight) % forest[currentRow].length;
    currentRow += slopeDown;
  }
  
  return treeCount;
};


module.exports.traverseForest = traverseForest;


console.log('Part One: ', traverseForest('test2.txt', 3, 1));
console.log('Part Two: ', 
  traverseForest('test2.txt', 1, 1) *
  traverseForest('test2.txt', 3, 1) *
  traverseForest('test2.txt', 5, 1) *
  traverseForest('test2.txt', 7, 1) *
  traverseForest('test2.txt', 1, 2)
);