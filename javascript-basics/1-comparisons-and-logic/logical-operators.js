// and: && evaluates to true if BOTH values are true
console.assert(true && true, 'true && true');
console.assert(true && false, 'true && false');
console.assert(false && true, 'false && true');
console.assert(false && false, 'false && false');


// or: || evaluates to true if ONE OR BOTH are true
console.assert(true || true, 'true || true');
console.assert(true || false, 'true || false');
console.assert(false || true, 'false || true');
console.assert(false || false, 'false || false');


// negation: ! reverses the truthiness of a value
console.assert(!true, '!true');
console.assert(!false, '!false');
