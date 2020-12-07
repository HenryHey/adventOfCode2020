const lib = require('./lib');

describe.only('Part one test', () => {
  test('test 1', () => {
    const inputFile = 'test1.txt';
    const expectedOutput = 820;

    const output = lib.go(inputFile);

    expect(output).toBe(expectedOutput);
  });

  test('test 2', () => {
    const inputFile = 'test2.txt';
    const expectedOutput = 965;

    const output = lib.go(inputFile);

    expect(output).toBe(expectedOutput);
  });
});

describe('Part two test', () => {
  test('test 1', () => {
    const inputFile = 'test1.txt';

    const expectedOutput = 0;

    const output = lib.go(inputFile);

    expect(output).toBe(expectedOutput);
  });
});