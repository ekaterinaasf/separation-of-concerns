const value = '4';

let result;
if (value === '4') {
  result = true;
} else {
  result = false;
}

console.assert(result === false, `result should be false, it was ${result}`);
