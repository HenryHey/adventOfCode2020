const lib = require('./lib');

describe('Part one test', () => {
  test('test 1', () => {
    const inputFile = 'test1.txt';
    const expectedOutput = 0;

    const output = lib.go(inputFile);

    expect(output).toBe(expectedOutput);
  });
});

describe.only('Part two test', () => {
  test('test 1', () => {
    const inputFile = 'test1.txt';

    const expectedOutput = 0;

    const output = lib.go(inputFile);

    expect(output).toBe(expectedOutput);
  });
});