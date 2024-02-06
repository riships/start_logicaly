// ES6

// class User {
//     constructor(username, email, password) {
//         this.username = username;
//         this.email = email;
//         this.password = password;
//     }

//     encryptPass() {
//         return `${this.password} abc`
//     }

//     changeUser() {
//         return `${this.username.toUpperCase()} abc`
//     }
// }

// const chai = new User('rishi_s_s', 'rishi.soni@gmail.com', 'rishi123');
// console.log(chai.encryptPass());
// console.log(chai.changeUser());


// lets see behind the scenene
function newUser(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
}


newUser.prototype.encryptPass = function () {
    return `${this.password} abc`
}

newUser.prototype.changeUser = function () {
    return `${this.username.toUpperCase()} abc`
}

const myTea = new newUser('rishi_s_s', 'rishi.soni@gmail.com', 'rishi123');
console.log(myTea.encryptPass());
console.log(myTea.changeUser());
