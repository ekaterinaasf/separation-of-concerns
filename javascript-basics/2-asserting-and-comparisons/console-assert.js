// boolean values help to understand console.assert

// if the first argument to console.assert is true, it passes
console.assert(true);

// if the first argument to console.assert is false, it fails
console.assert(false);

// the second argument is the message that will be displayed
// this message must be wrapped in quotes (you'll learn why soon)
console.assert(true, 'this assert passes');
console.assert(false, 'this assert fails');

// PS. open your browser's console!
// In the console, only failing asserts are displayed.
// this is the standard behavior for console.assert
// these slides will also displays passing asserts to help you study
