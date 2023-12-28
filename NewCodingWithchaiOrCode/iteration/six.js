const myCoding = ['cpp', 'python', 'JavaScript', 'java', 'css'];


myCoding.forEach((elem) => {
    // console.log(elem);
    // return elem;
})

// console.log(values);


// filter method
const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
let myOutPut = myNums.filter((num) => num > 4);

// console.log(myOutPut);


// filter with foreach 
const filteredArr = [];
myNums.forEach((num) => {
    if (num > 4) {
        filteredArr.push(num)
    }
})
console.log(filteredArr);