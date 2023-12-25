// falsy value
// false, 0, -0, BigInt 0n, null, undefined, NaN


// truthy vlaues
// "0", 'false', " ", [], {}, function () { }


// null coalescing operator (??):null undefined
let val1;

val1 = null ?? undefined;

console.log(val1);
// logical AND (&&) : returns the first falsy value or the last value if no falsy values are found