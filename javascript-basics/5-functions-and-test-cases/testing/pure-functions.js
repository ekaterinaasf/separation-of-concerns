// PURE FUNCTIONS is a habit, not a language feature:
//  - only use LOCAL VARIABLES and PARAMETERS
// writing pure functions is easier to understand and debug
//  their behavior is consistent.  same args, same return value

// you can check if your function is pure without executing it
// point at each variable inside it and ask
//  1. is this declared as a parameter?
//  2. is this declared locally with let or const?
// if you can't answer yes to one of them, rewrite your function!

// which of these are pure functions?

function a() {
  return x + y;
}

function b(y) {
  return x + y;
}

function c(y, x) {
  return x + y;
}

function d(x, y, z) {
  return x + y;
}

function e(x, y) {
  return z + y;
}
