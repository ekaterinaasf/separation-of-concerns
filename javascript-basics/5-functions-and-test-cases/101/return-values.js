// PS. study this in JS Tutor!

// RETURN VALUES allow you to use values after execution has ended
function describeValue(parameter) {
  return (typeof parameter) + ', ' + parameter;
  console.assert(true, 'nothing is executed after a return statement!');
}

// to save return values for later, assign them to a variable
const returned1 = describeValue(4.0);
console.assert(returned1 === 'number, 4', 'first');

const returned2 = describeValue('4.0');
console.assert(returned2 === 'string, 4.0', 'second');

const arg3 = null;
const returned3 = describeValue(arg3);
console.assert(returned3 === 'object, null', 'third');

const arg4 = undefined;
const returned4 = describeValue(arg4);
console.assert(returned4 === 'undefined, undefined', 'fourth');

const returned5 = describeValue();
console.assert(returned5 === 'undefined, undefined', 'fifth');

// you can use return values without variables, but it's not as useful
console.assert(describeValue(true) === 'boolean, true', 'sixth');
