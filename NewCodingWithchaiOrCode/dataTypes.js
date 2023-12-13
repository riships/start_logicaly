// primitiv data type or call by value
// if we copy/assign to another variable it will only copy/assign value not its memory

// String, Number, Boolean, null, undefined, Symbole and BigInt

let myValStr = 'Hello my name is rishi';
let myValNum = 1234;
let myValBool = true;
let myValNul = null;
let myValUnd;
let myValSymb = Symbol("");
let bigInt = BigInt(9876543210987654321);
console.log(`Value of string: ${myValStr}`);
console.log(`Type of string :${typeof myValStr}`);
console.log(`\n Value of number: ${myValNum}`)
console.log(`Type of number :${typeof myValNum}`);
console.log(`\n Value of boolean: ${myValBool}`);
console.log(`Type of boolean :${typeof myValBool}`);
console.log('\nNull value: ', myValNul)
console.log(`Type of Null : ${typeof myValNul}`);
console.log(`Symbol value: ${myValSymb}`);
console.log(`Type of symbol : ${typeof myValSymb}`);
try {
    console.log(`undefined value: ${myValUnd}`);
} catch (error) {
    console.log("Error because Undefined is not initialized yet");
}
