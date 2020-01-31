// const is short for CONSTANT.  a value that never changes

// variables with const cannot be reassigned
const constantVariable = 12;
// this will throw an execution-phase error
constantVariable = 4;

// they also cannot be declared without assigning
// this will throw a creation-phase error
const anotherConstantVariable;

// all of these things are possible with let
let variable = 12;
variable = 4;

let anotherVariable;

/*
  the exercises in these slides will use let to reassign values
  this is to help you understand how program memory works.

  when writing your own code, it is best to always use const.
  it will take some practice to do this, but is worth it.
  programs with only const are easier to understand and debug
*/
