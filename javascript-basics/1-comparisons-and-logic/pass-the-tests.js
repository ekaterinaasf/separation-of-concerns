console.assert(_ === true, 'first');

console.assert(false !== _, 'second');

console.assert(!_ && !_, 'third');

console.assert(!(_ || _), 'fourth');

console.assert(_ !== (false || true), 'fifth');

console.assert(_ === (false && true), 'sixth');

console.assert(_ !== false && true, 'seventh');

console.assert(_ === false && true, 'eighth');

console.assert(_ === _ === false, 'ninth');

console.assert(_ !== _ !== false, 'tenth');

