function scramble(param_1, param_2, param_3) {
  const result = param_2 + param_3 + param_1;
  return result;
}

const arg_1 = "x", arg_2 = "z", arg_3 = "y";
const returned_1 = scramble(arg_1, arg_2, arg_3);
console.assert(returned_1 === "zyx", 'first');

const arg_4 = "x", arg_5 = "y", arg_6 = "z";
const returned_2 = scramble(arg_4, arg_5, arg_6);
console.assert(returned_2 === "yzx", 'second');

const arg_7 = "x", arg_8 = "y", arg_9 = "z";
const returned_3 = scramble(arg_9, arg_8, arg_7);
console.assert(returned_3 === "yxz", 'third');

const arg_10 = "y", arg_11 = "x", arg_12 = "z";
const returned_4 = scramble(arg_11, arg_12, arg_10);
console.assert(returned_4 === "zyx", 'fourth');
