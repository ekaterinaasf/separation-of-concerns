// BEHAVIOR: the test cases a function passes (inputs & outputs)
// IMPLEMENTATION: the code inside the function (how it is written)

const behaviorTests = [
  { name: 'first', args: [true], expected: 'boolean, true' },
  { name: 'second', args: [3], expected: 'number, 3' },
  { name: 'third', args: ['6'], expected: 'string, 6' },
  { name: 'fourth', args: [null], expected: 'object, null' },
  { name: 'fifth', args: [NaN], expected: 'number, NaN' },
];

// passes all the tests
function implementation_1(param) {
  return typeof param + ', ' + param;
}
behaviorTests.forEach(function (test) {
  console.assert(
    implementation_1(...test.args) === test.expected,
    `${test.name} (implementation 1)`
  );
})

// passes the same tests, but is written differently
function implementation_2(value) {
  const type = typeof value;
  return `${type}, ${value}`;
}
behaviorTests.forEach(function (test) {
  console.assert(
    implementation_2(...test.args) === test.expected,
    `${test.name} (implementation 2)`
  );
})
