const reverseAndUpperTests = [
  { name: 'first', args: ['fdsa'], expected: 'ASDF' },
  { name: 'second', args: ['./\.'], expected: '.\/.' },
  { name: 'third', args: ['Fd-Df'], expected: 'FD-DF' },
  { name: 'fourth', args: [''], expected: '' },
  { name: 'fifth', args: ['54321'], expected: '12345' },
];

function reverseAndUpper(str) {
  const upperCased = str.toUpperCase();
  const reversed = upperCased.split('').reverse().join('');
  return reversed;
}

testing(reverseAndUpper, reverseAndUpperTests);

