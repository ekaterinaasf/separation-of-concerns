// strict equality: ===

// if two values are the same, === evalutes to true:
console.assert(true === true, 'true === true');
console.assert(false === false, 'false === false');

// if they are not, it evaluates to false
console.assert(true === false, 'true === false');
console.assert(false === true, 'false === true');


// strict inequality: !==

// if two values are NOT the same, !== evalutes to true:
console.assert(true !== false, 'true !== false');
console.assert(false !== true, 'false !== true');

// if they ARE the same, it evaluates to false
console.assert(true !== true, 'true !== true');
console.assert(false !== false, 'false !== false');


// multiple comparisons are evaluated left to right
console.assert(false === false === true, 'false === false === true');
console.assert(false === true === true, 'false === true === true');
console.assert(false !== true === true, 'false !== true === true');
console.assert(false === false !== false, 'false === false !== false');
