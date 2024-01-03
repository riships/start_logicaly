// primitiv data type or call by value
// if we copy/assign to another variable it will only copy/assign value not its memory

// String, Number, Boolean, null, undefined, Symbole and BigInt

let myValStr = 'Hello my name is rishi';
let myValNum = 1234;
let myValBool = true;
let myValNul = null;
let myValUnd;
let myValSymb = Symbol(125);
let myValSymbNew = Symbol(125);

let bigInt = BigInt(9876543210987654321);

// console.log(myValBool);
// console.log(myValNum);
// console.log(myValNul);
// console.log(myValUnd);
// console.log(myValStr);
// console.log(bigInt);

// console.log(myValSymb == myValSymbNew);


// Non Primitive data types

//  Array, Object, Function

// Array

let students = ['rishi', 'ankit', 'shivani', 'manisha'];

// console.log(students);


let studentDetails = {
    name: 'Ganadeep Singh',
    age: 24,
    mailId: 'soport.singh1998@gmail.com',
    address: 'Delhi'
}
// console.log(studentDetails);

// function statement 
// it suppoer hoisting and it can called before intialization
// console.log(add(4, 6));
function add(a, b) {
    let sum = a + b;
    return sum;
}


// function expression

let add2 = function (a, b) {
    let sum = a + b;
    return sum;
}
// console.log(add2(3, 8));



// ================Now talk about memory allocation===========//

// Stack (Primitive Data Types), Heap (Non-Primitive Data Types)

// Stack type
let myGithubName = 'riships';

let updatedGithubName = 'rishipsnew';

// console.log(myGithubName);
// console.log(updatedGithubName);


// heap type 
// it updates the both value 

let userOne = {
    name: 'Manisha',
    email: 'manisha@gmail.com'
}

let userTwo = userOne;
userTwo.email = 'manishanew@gmail.com'


console.log(userTwo.email);
console.log(userOne.email);




