// LOGGING vs ASSERTING
// console.assert is for PREDICTING & TESTING what WILL HAPPEN
//  asserting is more challenging and you to be a better programmer
//  aaserts will show up to the right along with PASS or FAIL
//  you will learn more about asserting very soon
console.assert(true, 'this assert passes :)');
console.assert(false, 'this assert fails :(');
// console.log is for DESCRIBING & EXPLAINING what DID HAPPEN
//  logging is easier and can be helpful but is not the best practice
//  you will need to open the console to see logged values
console.log(true, 'this assert passes :)');
console.log(false, 'this assert fails :(');
console.log({ welcomeTo: 'JavaScript', haveA: 'nice day.' });

// COMMENTS are two slashes at the beginning of a line
// they tell the JS interpreter not to read that line of code
// quickly comment/uncomment multiple lines by highlighting
//  and hitting ctr-/
console.assert(false, 'comment both of these lines then evaluate');
console.assert(true, 'comment both of these lines then evaluate');
// console.assert(false, 'uncomment both of these lines then evaluate');
// console.assert(true, 'uncomment both of these lines then evaluate');

// The editor will show you syntax errors and code warnings
//  with little logos to the left of your code
//  hover over them to learn more
const x = 0
x = 4;
// const = 5; // uncomment this to see an error logo
