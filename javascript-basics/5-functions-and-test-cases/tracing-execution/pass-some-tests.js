function scramble(param_1, param_2, param_3) {
  const result = param_3 + param_1 + param_2;
  return result;
}

const arg_1 = "a";
const arg_2 = "c";
const arg_3 = "b";
const returned_1 = scramble(arg_1, arg_2, arg_3);
console.assert(returned_1 === _, 'first');

const arg_4 = "a";
const arg_5 = "b";
const arg_6 = "c";
const returned_2 = scramble(arg_4, arg_5, arg_6);
console.assert(returned_2 === _, 'second');

const arg_7 = "c";
const arg_8 = "b";
const arg_9 = "a";
returned_3 = scramble(arg_8, arg_9, arg_7);
console.assert(returned_3 === _, 'third');

const arg_10 = "b";
const arg_11 = "a";
const arg_12 = "c";
const returned_4 = scramble(arg_12, arg_11, arg_10);
console.assert(returned_4 === _, 'fourth');

const arg_13 = "b";
const arg_14 = "c";
const arg_15 = "a";
const returned_5 = scramble(arg_14, arg_15, arg_13);
console.assert(returned_5 === _, 'fifth');

const arg_16 = "c";
const arg_17 = "a";
const arg_18 = "b";
const returned_6 = scramble(arg_18, arg_17, arg_16);
console.assert(returned_6 === _, 'sixth');
