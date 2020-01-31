// a function is never complete without (passing) test cases!
//  a test case has a NAME, ARGUMENTS, and EXPECTED RETURN VALUE
//  there's many ways to write tests, for now we write them like this:

// (you'll learn arrays & objects soon, for now just use this syntax)
const testCases = [
  { name: 'first', args: [2, '2'], expected: false },
  { name: 'second', args: ['2.0', '2'], expected: false },
  { name: 'third', args: [2.0, 2], expected: true },
  { name: 'fourth', args: ['2', '2'], expected: true },
  { name: 'fifth', args: [NaN, NaN], expected: false },
];

function mysteryOperator(a, b) {
  // write me!
}

// you should run your tests ALL THE TIME
//  hit "evaluate code" after every small change you make!
testCases.forEach(function (test) {
  const actual = mysteryOperator(...test.args);
  console.assert(
    actual === test.expected,
    `${test.name}: (${typeof actual}) ${actual}`
  );
})
// (you will also learn array methods soon
//    just use this syntax for now as well)
