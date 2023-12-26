// falsy value
// false, 0, -0, BigInt 0n, null, undefined, NaN


// truthy vlaues
// "0", 'false', " ", [], {}, function () { }


// null coalescing operator (??):null undefined
let val1;

val1 = null ?? undefined;

// console.log(val1);


// ternary operator
const iceTeacPrice = 100;
iceTeacPrice <= 80 ? console.log("less than 80") : console.log("more than 80");