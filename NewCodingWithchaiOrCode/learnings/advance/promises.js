// First promise
const myPromise = new Promise((resolve, reject) => {
    setTimeout(function () {
        console.log("Async task is complete");
    }, 1000)
})
myPromise.then(function () {
    console.log("Promise Consumed");
})

// Second promise
new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log("Async task 2 completed");
        resolve()
    }, 1000)
}).then(function () {
    console.log("Async simple task");
})


// third promise 
const promiseThree = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve({ username: "rishi", email: "rishi.example@gmail.com" })
    }, 2000);
})

promiseThree.then(function (user) {
    console.log(user);
})

// four promise 

const promiseFour = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = true;
        if (!error) {
            resolve({ username: 'Rishi', password: 123 })
        } else {
            reject('something went wrong')
        }
    }, 2000);
})

promiseFour
    .then(function (myUser) {
        console.log(myUser);
        return myUser.username
    })
    .then((userName) => {
        console.log(userName);
    })
    .catch((error) => {
        console.log(error);
    })
    .finally(() => {
        console.log("The prmise is reslve or rejected");
    })


// promise five 

const promiseFive = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = true;
        if (!error) {
            resolve({ myUser: 'user123', pass: 'thisispass' })
        } else {
            reject('This is error in loading data')
        }
    }, 3000);
})

async function consumePromiseFie() {
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}
consumePromiseFie()


async function getAllUsers() {
    try {
        const res = await fetch('http://jsonplaceholder.typicode.com/users')
        const data = await res.json();
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}
getAllUsers()