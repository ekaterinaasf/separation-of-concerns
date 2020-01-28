const value = 4;

let result;
if (value === '4') {
  result = true;
} else {
  result = false;
}

console.assert(result === true, `result should be true, it was ${result}`);
