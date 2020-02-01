function scramble(param_1, param_2, param_3) {
  const result = param_3 + param_1 + param_2;
  return result;
}
const arg_1 = "a";
const arg_2 = "c";
const arg_3 = "b";
console.assert(scramble(arg_1, arg_2, arg_3) === _, 'first');

const arg_4 = "a";
const arg_5 = "b";
const arg_6 = "c";
console.assert(scramble(arg_4, arg_5, arg_6) === _, 'second');

const arg_7 = "c";
const arg_8 = "b";
const arg_9 = "a";
console.assert(scramble(arg_8, arg_9, arg_7) === _, 'third');

const arg_10 = "b";
const arg_11 = "a";
const arg_12 = "c";
console.assert(scramble(arg_12, arg_11, arg_10) === _, 'fourth');

const arg_13 = "b";
const arg_14 = "c";
const arg_15 = "a";
console.assert(scramble(arg_14, arg_15, arg_13) === _, 'fifth');

const arg_16 = "c";
const arg_17 = "a";
const arg_18 = "b";
console.assert(scramble(arg_18, arg_17, arg_16) === _, 'sixth');
