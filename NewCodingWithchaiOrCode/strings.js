// this is string method let's try and see the output 

let myNameWithAddress = 'rishi-prakash-soni-nitishhomesnoida';

// console.log(myNameWithAddress);

// now lets see the method to get index of any string
let findIndex = myNameWithAddress.indexOf('i');
let findTheValue = myNameWithAddress.charAt(5);

// let countingOfChar = 0;
// for (let i = 0; i < myNameWithAddress.length; i++) {
//     if (myNameWithAddress[i] == 'r') { 
//         countingOfChar++ 
//     }
// };
// console.log(countingOfChar); it will print the all counting of r




// console.log(findIndex);
console.log(myNameWithAddress.__proto__);

// document.body.innerHTML = myNameWithAddress.at();
// let myNewColordVal = myNameWithAddress.replaceAll('-', '<br>');
let myNewConstructVal = new String(myNameWithAddress);

// document.write(myNewColordVal)
// console.log(myNewConstructVal.length);

