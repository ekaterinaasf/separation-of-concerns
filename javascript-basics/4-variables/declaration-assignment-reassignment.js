// Psst ... be sure to click the "open in JS Tutor" button!

// DECLARING a variable creates a new named entry in memory:
let variable;
// variables store undefined by default if you do not assign a value
console.assert(variable === undefined, 'first');

// after a variable is DECLARED, you can ASSIGN a value to it:
variable = 4;
console.assert(variable === 4, 'second');

// later on you can REASSIGN it a new value:
variable = 12;
console.assert(variable === 12, 'third');

// It is also possible to declare AND assign in one step:
let anotherVariable = 'hi!';
console.assert(anotherVariable === 'hi!', 'fourth');

// this variable can also be reassigned:
anotherVariable = 'bye!';
console.assert(anotherVariable === 'bye!', 'fifth');
