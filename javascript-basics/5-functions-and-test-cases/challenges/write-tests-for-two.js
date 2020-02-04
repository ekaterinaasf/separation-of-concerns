const testCases = [
  // replace null with the correct expected value
  { name: 'first', args: [1, 2, 3], expected: 6 },
  { name: 'second', args: ['a', 'b', 'c'], expected: 'cba' },
  { name: 'third', args: ['1', 'a', '3'], expected: '3a1' },
  { name: 'fourth', args: ['a', 'b', 'a'], expected: 'aba' },
  { name: 'fifth', args: [0, 4, 1], expected: 5 },

  // can you find 3 different arguments that result in 'placeholder'?
  { name: 'sixth', args: ['der', 'acehol', 'pl'], expected: 'placeholder' },
  { name: 'seventh', args: ['r','laceholde', 'p'], expected: 'placeholder' },
  { name: 'eighth', args: ['aceholder','l','p'], expected: 'placeholder' },
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
