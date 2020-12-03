const lib = require('./lib');

describe('Part one test', () => {
  test('test 1', () => {
    const inputFile = 'test1.txt';
    const slopeRight = 3;
    const slopeDown = 1;

    const expectedOutput = 7;

    const output = lib.traverseForest(inputFile, slopeRight, slopeDown);

    expect(output).toBe(expectedOutput);
  });

  test('test 2', () => {
    const inputFile = 'test2.txt';
    const slopeRight = 3;
    const slopeDown = 1;

    const expectedOutput = 173;

    const output = lib.traverseForest(inputFile, slopeRight, slopeDown);

    expect(output).toBe(expectedOutput);
  })
});

describe.only('Part two test', () => {
  test('test 1', () => {
    const inputFile = 'test1.txt';

    const expectedOutput = 336;

    const output = 
      lib.traverseForest(inputFile, 1, 1) *
      lib.traverseForest(inputFile, 3, 1) *
      lib.traverseForest(inputFile, 5, 1) *
      lib.traverseForest(inputFile, 7, 1) *
      lib.traverseForest(inputFile, 1, 2);


    expect(output).toBe(expectedOutput);
  });

  test('test 2', () => {
    const inputFile = 'test2.txt';

    const expectedOutput = 4385176320;

    const output = 
      lib.traverseForest(inputFile, 1, 1) *
      lib.traverseForest(inputFile, 3, 1) *
      lib.traverseForest(inputFile, 5, 1) *
      lib.traverseForest(inputFile, 7, 1) *
      lib.traverseForest(inputFile, 1, 2);
    expect(output).toBe(expectedOutput);
  })
});