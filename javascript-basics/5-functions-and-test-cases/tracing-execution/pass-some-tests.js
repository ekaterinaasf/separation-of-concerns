function scramble(param_1, param_2, param_3) {
  const result = param_3 + param_1 + param_2;
  return result;
}

const arg_1 = "a", arg_2 = "c", arg_3 = "b";
const returned_1 = scramble(arg_1, arg_2, arg_3);
console.assert(_ === returned_1, 'first');

const arg_4 = "a", arg_5 = "b", arg_6 = "c";
const returned_2 = scramble(arg_4, arg_5, arg_6);
console.assert(_ === returned_2, 'second');

const arg_7 = "c", arg_8 = "b", arg_9 = "a";
const returned_3 = scramble(arg_8, arg_9, arg_7);
console.assert(_ === returned_3, 'third');

const arg_10 = "b", arg_11 = "a", arg_12 = "c";
const returned_4 = scramble(arg_12, arg_11, arg_10);
console.assert(_ === returned_4, 'fourth');

const arg_13 = "b", arg_14 = "c", arg_15 = "a";
const returned_5 = scramble(arg_14, arg_15, arg_13);
console.assert(_ === returned_5, 'fifth');

const arg_16 = "c", arg_17 = "a", arg_18 = "b";
const returned_6 = scramble(arg_18, arg_17, arg_16);
console.assert(_ === returned_6, 'sixth');

