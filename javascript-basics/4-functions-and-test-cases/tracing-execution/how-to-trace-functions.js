// PS. Study this in JS Tutor!

// 0: Creation Phase, function is declared
//  Execution Phase begins
function simpleFunction(param_1, param_2) {
  // 3 and 7: result is assigned by flipping the params
  const result = param_2 + param_1;
  // 4 and 8: a return value is generated
  return result;
  // 5 and 9: global result variable is declared & assigned
}

// 1: args are declared & assigned
const arg_1 = '3', arg_2 = '5';

// 2: simpleFunction is executed, creating a new frame
//    parameters are assigned values from arg_1 & arg_2
const result1 = simpleFunction(arg_1, arg_2);

// 6: simpleFunction is executed, creating a new frame
//    parameters are assigned values from 'a' & 'b'
const result2 = simpleFunction('a', 'b');

// 10: result1 is asserted
console.assert(result1 === _, 'asserting result1');

// 11: result1 is asserted
console.assert(result2 === _, 'asserting result2');


