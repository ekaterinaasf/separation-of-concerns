// There are many kinds of numbers in JS
// instead of guessing or remembering them all, use typeof!
console.assert(
  (typeof 1) === "number",
  "positive numbers are a 'number'"
);
console.assert(
  (typeof -1) === "number",
  "negative numbers are a 'number'"
);
console.assert(
  (typeof 1.3) === "number",
  "decimals are a 'number'"
);
console.assert(
  (typeof 0.0) === "number",
  "any form of 0 is a 'number'"
);
console.assert(
  (typeof Infinity) === "number",
  "Infinity is a number"
);
console.assert(
  (typeof 1e5) === "number",
  "scientific notation is a number"
);
console.assert(
  (typeof NaN) === "number",
  "NaN (not a number) is a 'number' ... ?"
);

// NaN is a strange and special value in JavaScript
//  it is the only value that does not compare to itself
console.assert(NaN === NaN, 'NaN === NaN');
console.assert(NaN !== NaN, 'NaN !== NaN');
