// complete the test cases to pass the function
// some are started for you, some are completely empty
const testCases = [
  { name: 'first', args: [], expected: '(false) 1, 1 (false)' },
  { name: 'second', args: [], expected: '(true) 1, a (false)' },
  { name: 'third', args: [], expected: '(false) null, null (false)' },
  { name: 'fourth', args: [NaN, NaN], expected: 'placeholder' },
  { name: 'fifth', args: [], expected: 'placeholder' },
  { name: 'sixth', args: [], expected: 'placeholder' },

  // for the last two, find different arguments with the same expected value
  { name: 'seventh', args: [], expected: '(true) 1, 1 (true)' },
  { name: 'eighth', args: [], expected: '(true) 1, 1 (true)' },
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
