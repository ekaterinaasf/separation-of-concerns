const testCases = [
  { name: 'first', args: [], expected: 'placeholder' },
  { name: 'second', args: [], expected: 'placeholder' },
  { name: 'third', args: [], expected: 'placeholder' },
  { name: 'fourth', args: [], expected: 'placeholder' },
  { name: 'fifth', args: [], expected: 'placeholder' },

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
