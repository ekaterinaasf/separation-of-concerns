// pure functions are easy to understand and test because:
//  the same arguments always return the same values!

// pure function
function compareTo(param1, param2) {
  return param1 === param2;
}

// same arguments ...
const returned1 = compareParameters(true, true);
console.assert(returned1 === true, 'first impure');

// ... same result
const returned2 = compareToGlobalVariable(true);
console.assert(returned2 === false, 'second impure');


// if your function behavior changes over time
//  that's hard to understand and fix bugs

// impure function
function compareToGlobalVariable(parameter) {
  return parameter === globalVariable;
}

let globalVariable = true;
// same arguments ...
const returned1 = compareToGlobalVariable(true);
console.assert(returned1 === true, 'first impure');

globalVariable = 4;
// ... different result!
const returned2 = compareToGlobalVariable(true);
console.assert(returned2 === false, 'second impure');

// this
