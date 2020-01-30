// strings are anything between quotations

console.assert(
  (typeof "98ohnsdbeo") === "string",
  'double quotes " create a string'
);

console.assert(
  (typeof '0831=_ml1') === 'string',
  "single quotes ' create a string"
);

console.assert(
  (typeof `var ig23 -9/`) === `string`,
  "back-ticks ` create a string"
);


// + plus will CONCATENATE (stick together) multiple strings
console.assert('a' + 'b' + 'c' === 'abc', 'fourth');
console.assert('c' + 'b' + 'a' === 'cba', 'fifth');
