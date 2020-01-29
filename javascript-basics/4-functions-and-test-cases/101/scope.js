// PS. study this in JS Tutor!

// variables declared in function are SCOPED to that execution frame
//  this includes parameters and locally declared variables
function typeAndValue(parameter) {
  const type = typeof parameter;
}

typeAndValue(5);
console.assert(parameter === 5, 'first');
console.assert(type === 'number', 'second');

// it is possible to use variables from outside a function
//  this is a VERY BAD HABIT!
//  you should ONLY USE PARAMETERS and LOCAL VARIABLES
function compareToGlobalVariable(parameter) {
  console.assert(parameter === globalVariable, 'comparing global variable');
}

let globalVariable = true;
compareToGlobalVariable(true);
compareToGlobalVariable(false);
globalVariable = 4;
compareToGlobalVariable('4');
