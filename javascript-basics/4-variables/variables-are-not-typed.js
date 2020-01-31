// variables can be assigned different types during program execution:
// this can cause many problems in your code!

let variable = 3;
console.assert((typeof variable) === 'number', 'first');

variable = 'hi!';
console.assert((typeof variable) === 'string', 'second');

variable = false;
console.assert((typeof variable) === 'boolean', 'third');

variable = undefined;
console.assert((typeof variable) === 'undefined', 'fourth');

variable = null;
console.assert((typeof variable) === 'object', 'fifth');

