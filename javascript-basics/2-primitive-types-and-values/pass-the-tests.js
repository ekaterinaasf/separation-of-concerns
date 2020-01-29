// replace the _ to pass the asserts
// careful, there may be a trick questions ;)

console.assert((typeof (typeof false)) === _, 'first');

console.assert((typeof _) === 'object', 'second');

console.assert((typeof 4) _(typeof '4'), 'third');

console.assert(4 _ '4', 'fourth');

console.assert((typeof 'undefined') === _, 'fifth');

console.assert(
  (typeof (typeof _)) !== (typeof (typeof _)),
  'sixth'
);

