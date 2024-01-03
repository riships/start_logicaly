//  lets see examples of array

const myArr = [22, 23, 24, 25, 26, 27, 28];

// console.log(myArr);
// console.log(myArr[1]);

// add and delete a value at the end of existing Array
// myArr.push(98);
// myArr.pop();

// add and delete a value at the starting of existing Array
// myArr.unshift(98);
// myArr.shift();

// console.log(myArr.includes(23));
// console.log(myArr.indexOf(67));

// const newArr = myArr.join();

// console.log(newArr);

// splice and slice


const myNewArr1 = myArr.slice(1, 3);
console.log("a", myArr);
console.log(myNewArr1);


const myNewArr2 = myArr.splice(1, 3);
console.log("b", myArr);
console.log(myNewArr2);



