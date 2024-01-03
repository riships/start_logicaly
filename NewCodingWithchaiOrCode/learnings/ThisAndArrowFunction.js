// This function tell us about the current context 

const user = {
    username: 'rishi_s_S',
    price: 999,


    welcomeMsg: function () {
        console.log(this);
        console.log(`Hello ${this.username} welcome back`);
    }
    // in this scope of user this is cuurent cotext 
}
// user.welcomeMsg();
// if we run this keyword here it will return a empty context 
// and if we run this context in browser it will return the the window function
// for example try to run this in browser
// console.log(this);


// lets see how this work in funtions
// With Function Declarations

function myUserTest1(myUser) {
    const username = myUser;
    // console.log(this);
    console.log(this.username);
}
// myUserTest1('rishi_s_S');


// With Function expression
const myUserTest2 = function (myUser) {
    const username = myUser;
    // console.log(this);
    console.log(this.username);
}
// myUserTest2('rishi_s_S');


const myUserTest3 = (myUser) => {
    const username = myUser;
    // console.log(this);
    console.log(this.username);
}
// myUserTest3('rishi_s_S');


// lets see some example of implicit return funtions

const myUserData = (userMyName) => (userMyName)

// console.log(myUserData('Rishi'))

// lets see some example of explicit return funtions

const myUserData2 = (userMyName) => { return userMyName }

// console.log(myUserData2('Rishi'))







