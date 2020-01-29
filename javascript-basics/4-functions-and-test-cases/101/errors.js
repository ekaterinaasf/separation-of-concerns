// PS. study this in JS Tutor!

// syntax errors in a function declaration
//  will be caught at creation phase
function withSyntaxError() {
  console.assert(===, 'assert inside of withSyntaxError');
}

// functions with semantic error in their body
//  won't throw an error until they are executed
function withSemanticError() {
  const a = 1;
  a = 2;
  console.assert(a === 2, 'assert inside of withSemanticError')
}

const aThing = 'hi!';
const anotherThing = 'bye!';
console.assert(aThing !== anotherThing, '... some other code ...');

// execute the function that will throw an error
withSemanticError();

