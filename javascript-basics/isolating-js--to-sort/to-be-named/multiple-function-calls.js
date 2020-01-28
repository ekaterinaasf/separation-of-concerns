function isStringFour(x) {
  if (x === '4') {
    return true;
  } else {
    return false;
  }
}

const firstResult = isStringFour('4');
console.assert(
  firstResult === true,
  `asserting firstResult`
);

const secondResult = isStringFour(4);
console.assert(
  secondResult === false,
  `asserting secondResult`
);

const thirdResult = isStringFour('four');
console.assert(
  thirdResult === false,
  `asserting thirdResult`
);
