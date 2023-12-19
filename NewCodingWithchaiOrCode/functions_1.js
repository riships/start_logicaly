function getUserRes(username) {
    return `Hello, ${username} Welcome back.`
}

// console.log(getUserRes('Rishi'));


// handle objects with function

let myUserLogin = {
    name: 'Rishi',
    email: 'rishisoni@gmail.com',
    resultText: `Thanks For Login.`
};


function loginRes(userData) {
    return `Hello Welcome ${userData.name} ${userData.resultText} your emailId is ${userData.email}`
}

// console.log(loginRes(myUserLogin));



// rest operator in this part

function restData(val1, val2, ...restDataForShow) {
    return (val1, val2, restDataForShow);
}
console.log(restData(100, 300, 500, 800));