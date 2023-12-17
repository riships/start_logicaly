// singleton

// Object.create

const iAmUserForLogIn = new Object();


iAmUserForLogIn.id = 'rishisoni2209';
iAmUserForLogIn.name = 'Rishi Prakash Soni';
iAmUserForLogIn.isLoggedIn = false;

// console.log(iAmUserForLogIn);

const iAmUserForLogInNew = {
    email: 'rishisoni@gmail.com',
    fullName: {
        getFullName: {
            firstName: 'Rishi',
            lastName: 'Soni'
        }
    }
}

// console.log(iAmUserForLogInNew.fullName.getFullName.firstName);



const obj1 = { 1: 'a', 2: 'b', 3: 'cd' };
const obj2 = { 4: 'sd', 6: 'dv', 8: 'bg' };
// console.log(obj1);
// const obj3 = { obj1, obj2 };

const obj3 = Object.assign({}, obj1, obj2);

// console.log(obj3);


const users = [
    { name: 'John Doe', email: 'john@example.com' },
    { name: 'Jane Doe', email: 'jane@example.com' },
    { name: 'Alice Smith', email: 'alice@example.com' },
    { name: 'Bob Johnson', email: 'bob@example.com' }
];


// console.log(Object.keys(iAmUserForLogIn));
// console.log(Object.values(iAmUserForLogIn));
// console.log(Object.entries(iAmUserForLogIn));

// console.log(iAmUserForLogIn.hasOwnProperty('isLoggedIn'));


