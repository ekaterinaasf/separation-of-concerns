// ! is evaluated BEFORE &&, ||, ===, or !==
// negation is evaluated BEFORE logical operators or comparisons
console.assert(!true === false, 'false === false');
console.assert(false || !false, 'false || true');
console.assert(!false !== false, 'true !== false');
console.assert(true && !false, 'true && true');


// === and !== are evaluated BEFORE && and ||
// comparisons are evaluated BEFORE logical operators
console.assert(true !== false || true, 'true || true');
console.assert(false && true === false, 'false && false');
console.assert(false || false !== false, 'false || false');


// parenthesis allow you to change the normal order of operations
// whatever is in parenthsis will be evaluated first
console.assert(!(true === false), '!false');
console.assert(!(false !== false), '!false');
console.assert(!(true && false), '!false');
console.assert(!(false || false), '!false');
console.assert(true !== (false || true), 'true !== true');
console.assert((false && true) === false, 'false === false');
console.assert((false || false) !== false, 'false !== false');
