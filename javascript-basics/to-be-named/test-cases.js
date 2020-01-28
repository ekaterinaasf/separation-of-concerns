// just use this for now, you will learn arrays & objects soon
const isStringFourTests = [
  { name: 'first', args: ['4'], expected: true },
  { name: 'second', args: [4], expected: false },
  { name: 'third', args: ['four'], expected: false },
]

function isStringFour(x) {
  if (x === '4') {
    return true;
  } else {
    return false;
  }
}

isStringFourTests.forEach(test => {
  console.assert(isStringFour(...test.args) === test.expected, test.name);
})
