console.assert(_ === true, 'first');

console.assert(false !== _, 'second');

console.assert(_ === _ === false, 'third');

console.assert(_ === _ !== false, 'fourth');

console.assert(_ !== _ !== false, 'fifth');

