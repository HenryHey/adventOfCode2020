const lib = require('./lib');

describe('Part one test', () => {
  test('valid passPort test', () => {
    inputPassPort = { 
      'ecl':'gry',
      'pid':'860033327',
      'eyr':'2020',
      'hcl':'#fffffd',
      'byr':'1937',
      'iyr':'2017',
      'cid':'147 ',
      'hgt':'183cm',
    };

    expect(lib.validPassPort(inputPassPort)).toBe(true);
  });

  test('test 1', () => {
    const inputFile = 'test1.txt';
    const expectedOutput = 2;

    const output = lib.go(inputFile);

    expect(output).toBe(expectedOutput);
  });

  test('test 2', () => {
    const inputFile = 'test2.txt';
    const expectedOutput = 216;

    const output = lib.go(inputFile);

    expect(output).toBe(expectedOutput);
  });
});