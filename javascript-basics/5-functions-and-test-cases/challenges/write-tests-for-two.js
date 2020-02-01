const testCases = [
  // replace null with the correct expected value
  { name: 'first', args: [], expected: null },
  { name: 'second', args: [], expected: null },
  { name: 'third', args: [], expected: null },
  { name: 'fourth', args: [], expected: null },
  { name: 'fifth', args: [], expected: null },

  // can you find 3 different arguments that result in 'placeholder'?
  { name: 'sixth', args: [], expected: 'placeholder' },
  { name: 'seventh', args: [], expected: 'placeholder' },
  { name: 'eighth', args: [], expected: 'placeholder' },
]

function one(x, y, z) {
  const temp = z;
  z = x;
  x = temp;
  return x + y + z;
}
testCases.forEach(function (test) {
  console.assert(one(...test.args) === test.expected,
    '(one)' + test.name);
});

function two(x, y, z) {
  return z + y + x;
}
testCases.forEach(function (test) {
  console.assert(two(...test.args) === test.expected,
    '(two)' + test.name);
});
