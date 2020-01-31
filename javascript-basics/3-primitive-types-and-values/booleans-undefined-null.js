// the final 3 types are much simpler than Strings and Numbers

// there are only 2 "boolean" values in JavaScript
console.assert(
  (typeof true) === "boolean",
  "true is a 'boolean'"
);
console.assert(
  (typeof false) === "boolean",
  "false is the other 'boolean'"
);

// there is one value with type 'undefined'
console.assert(
  (typeof undefined) === "undefined",
  "undefined is the only 'undefined'"
);

// and finally, null.  who's type is unexpectedly 'object'
console.assert(
  (typeof null) === "object",
  "null is (unexpectedly) 'object'"
);
