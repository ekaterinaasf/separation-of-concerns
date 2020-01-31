// impure functions use variables that are NOT LOCAL or PARAMETERS
//  this will make their behavior inconsistent
//  tests will be more difficult to write/understand
//  bugs will be harder to find & fix
// the same arguments do not always make the same return value!

// is this easier for you to understand?
const impureTests = [
  { name: 'impure first', args: [0], expected: -1 },
  { name: 'impure second', args: [0], expected: -2 },
  { name: 'impure third', args: [0], expected: -3 },
];
function impure(x) {
  return x - globalY;
}
let globalY = 0;
impureTests.forEach(test => {
  globalY = globalY + 1;
  console.assert(impure(...test.args) === test.expected, test.name);
});

// or is this easier?
const pureTests = [
  { name: 'pure first', args: [0, 1], expected: -1 },
  { name: 'pure second', args: [0, 2], expected: -2 },
  { name: 'pure third', args: [0, 3], expected: -3 },
];
function pure(x, y) {
  return x - y;
}
pureTests.forEach(test => {
  console.assert(pure(...test.args) === test.expected, test.name);
});
