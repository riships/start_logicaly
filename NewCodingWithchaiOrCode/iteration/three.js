// for of loop

const myArr = [1, 2, 3, 4, 5]

for (const elem of myArr) {
    // console.log("this is the value:" + elem);
}


const myString = "Hello Rishi Welcome";

for (const val of myString) {
    if (val === ' ') {
        continue;
    }
    // console.log(`This is the value of str: ${val}`);
}

// Map in this 

const myMap = new Map();
myMap.set('INR', 'Rishi')
myMap.set('Russia', 'Jack')
myMap.set('AFR', 'Doni')


// console.log(myMap);
// map with array 
for (const [key, val] of myMap) {
    // console.log(key + ' => ' + val);
}


// map with object


const myObj = {
    'name': 'rishi',
    'age': 26,
    'country': 'USA',
    'mailId': 'rishisoni@gmail.com'
}

for (const val of myObj) {
    // console.log(val);
}
// its not working with map
// this is not the right method to iterate object with map

