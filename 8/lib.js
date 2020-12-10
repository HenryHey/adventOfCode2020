const fs = require('fs');

let pointer = 0;
let acc = 0;

const loadCode = (inputFile) => {
  code = [];
  const lines = fs.readFileSync(inputFile).toString().split('\n');
  if (lines[lines.length - 1] === '') lines.pop();

  lines.forEach(line => {
    code.push({ 
      opCode: line.split(' ')[0],
      param: parseInt(line.split(' ')[1]),
      loop: false
    });
  });

  return code;
};

const runOp = (op) => {
  switch(op.opCode) {
    case 'acc':
      acc += op.param;
      pointer++;

      break;
    case 'jmp':
      pointer += op.param;
      break;
    case 'nop':
      pointer++;
      break;
    default:
      console.log('OpCode Error', op);
  }
  // console.log(op, pointer, acc);

};


const go = (inputFile) => {
  const code = loadCode(inputFile);

  while(1) {
    if (pointer >= code.length) {
      break;
    }

    if (code[pointer].bool) {
      return acc;
    }
    code[pointer].bool = true;
    runOp(code[pointer]);
  }  
};

const swap = (op) => {
  if (op.opCode === 'nop') {
    op.opCode = 'jmp';
    return true;
  }
  
  if (op.opCode === 'jmp') {
    op.opCode = 'nop';
    return true;
  }
  return false;
};

const go2 = (inputFile) => {
  const code = loadCode(inputFile);
  let programEnded = false;
  let currentChange = 0;
  let lastChange = -1;
  let codeChanged = false;

  while (!programEnded) {
    while(1) {
      if (pointer >= code.length) {
        programEnded = true;
        return acc;
      }

      if (code[pointer].bool) {
        break;
      }
      code[pointer].bool = true;
      runOp(code[pointer]);
    }

    while (!codeChanged) {
      codeChanged = swap(code[currentChange]);
      if (codeChanged) {
        if (lastChange >= 0) {
          swap(code[lastChange]);
        }
        lastChange = currentChange;
        currentChange++;
      } else {
        currentChange++;
      }
    }

    codeChanged = false;
    code.map(op => {
      op.bool = false;
    })
    pointer = 0;
    acc = 0;
  }
};
module.exports.go = go;

console.log('Part One: ', go('test2.txt'));
console.log('Part Two: ', go2('test2.txt'));
