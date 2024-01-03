// lets see some object and all its test cases

// singleton

// Object.create


// object literals
const myKey = 'myValidValue';
const myUser = {
    name: 'Rishi parakash soni',
    age: 22,
    email: 'rishisoni@gmail.com',
    // you cant use symbol directoly thats why you are using below syntaxing
    [myKey]: 'myValidValue',
    isLoggedIn: false,
    location: 'Noida',
    lastLogIn: ['Monday', 'Friday']
}

// console.log(myUser.age);
// console.log(myUser['isLoggedIn']);


// how to restrict the value from being updated

// Object.freeze(myUser);

myUser.email='rishisoni.edunext@mgmail.com';

// console.log(myUser.email);

myUser.talk=function () {
    console.log('Hello there what happening');
}
console.log(myUser.talk());


myUser.talk2 = function () {
    console.log(`Hello ${this.name} what happening`);
}

console.log(myUser.talk2());