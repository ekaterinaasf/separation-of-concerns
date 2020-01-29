// Be sure to study this in JS Tutor

// DECLARING a function creates it in memory
//  without executing the code inside the curly braces
function iExist() {
  console.assert(true, 'iExist has been called');
}

// EXECUTING a function will run the code in it's body
// you can do this as many times as you like
iExist();
iExist();
iExist();

// there are 3 PASS's, and one console.assert in the source code
//  console.assert is not run when the function is DECLARED
//  but it is run each time the function is EXECUTED
