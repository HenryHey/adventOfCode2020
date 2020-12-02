const lib = require('./lib');
const fs = require('fs');

describe('part one', () => {
  test('test 1', () => {
    const inputFile = './test1.txt';

    const output = lib.checkPasswords(inputFile);
    const expectedOutput = 2;

    expect(output).toBe(expectedOutput);
  });

  test('test 2', () => {
    const inputFile = './test2.txt';

    const output = lib.checkPasswords(inputFile);
    const expectedOutput = 666;

    expect(output).toBe(expectedOutput);
  }); 
});

describe('part two', () => {
  test('line test 1', () => {
    const inputLine = '1-3 a: abcde';

    const output = lib.correctLineNew(inputLine);

    expect(output).toBeTruthy();
  });

  test('line test 2', () => {
    const inputLine = '1-3 b: cdefg';

    const output = lib.correctLineNew(inputLine);

    expect(output).not.toBeTruthy();
  });

  test('line test 3', () => {
    const inputLine = '2-9 c: ccccccccc';

    const output = lib.correctLineNew(inputLine);

    expect(output).not.toBeTruthy();
  });

  test('test 1', () => {
    const inputFile = './test1.txt';

    const output = lib.checkPasswordsNew(inputFile);
    const expectedOutput = 1;

    expect(output).toBe(expectedOutput);
  });

  test('test 2', () => {
    const inputFile = './test2.txt';

    const output = lib.checkPasswordsNew(inputFile);
    const expectedOutput = 670;

    expect(output).toBe(expectedOutput);
  });
});