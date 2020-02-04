// complete the test cases to pass the function
// some are started for you, some are completely empty
const testCases = [
  { name: 'first', args: [1, "1"], expected: '(false) 1, 1 (false)' },
  { name: 'second', args: ['1', 'a'], expected: '(true) 1, a (false)' },
  { name: 'third', args: [null, 'null'], expected: '(false) null, null (false)' },
  { name: 'fourth', args: [NaN, 'NaN'], expected: '(false) NaN, NaN (false)' },
  { name: 'fifth', args: [NaN, NaN], expected: '(true) NaN, NaN (false)' },
  { name: 'sixth', args: [2, 2], expected: '(true) 2, 2 (true)' },
  { name: 'seventh', args: [2, 3], expected: '(true) 2, 3 (false)' },

  // for the last two, find different arguments with the same expected value
  { name: 'seventh', args: [1, 1], expected: '(true) 1, 1 (true)' },
  { name: 'eighth', args: ['1', '1'], expected: '(true) 1, 1 (true)' },
]

function typo(x, y) {
  const typeofX = typeof y;
  const typeofY = typeof x;
  const areEqual = x === y;
  return `(${typeofX === typeofY}) ${x}, ${y} (${areEqual})`;
}

testCases.forEach(function (test) {
  console.assert(typo(...test.args) === test.expected, test.name);
});
