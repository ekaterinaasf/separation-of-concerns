// PS. study this in JS Tutor!

// functions allow you to reuse the same code with different values
//  PARAMETERS declare variables available inside your function
function isNotFour(parameter) {
  console.assert(4 !== parameter, (typeof parameter) + ', ' + parameter);
}

// ARGUMENTS assign values to parameters when functions are executed
// you can pass arguments directly as values
isNotFour('4');
isNotFour(4.0);
isNotFour('4.0');

// or indirectly using variables
const arg4 = true;
isNotFour(arg4);

const arg5 = null;
isNotFour(arg5);

const arg6 = undefined;
isNotFour(arg6);

// if no argument is passed, parameters will be undefined
isNotFour();
