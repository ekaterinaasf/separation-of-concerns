// there are two way to use quotes inside of a string ...

// 1. use different kinds of quotes
console.assert(
  " 'hi' " && ' "hi" ' && ` 'hi' `,
  `it doesn't matter which is outer or inner`
);

// 2. use the same kind but escape them
console.assert(
  " \"hi\" " && ' \'hi\' ' && ` \`hi\` `,
  "either way is the same to JavaScript"
);

// ... otherwise you will get a syntax error!

// can you fix these errors?
'the dog goes 'woof'';
"the cat goes "meow"";
`the fly goes `buzz``;
