const testCases = [
  { name: 'first', args: ['3', '5', '7'], expected: '573' },
  { name: 'second', args: ['.', '|', '.'], expected: '|..' },
  { name: 'third', args: ['x', 'y', 'z'], expected: 'yzx' },
  { name: 'fourth', args: ['m', '', ''], expected: 'm' },
  { name: 'fifth', args: ['', '', 'm'], expected: 'm' },
  { name: 'sixth', args: ['', '', ''], expected: '' },
]

function scramble(a, b, c) {

}

testCases.forEach(function (test) {
  const actual = scramble(...test.args);
  console.assert(
    actual === test.expected,
    `${test.name}: (${typeof actual}) ${actual}`
  );
});
