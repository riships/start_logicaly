// ES6

class User {
    constructor(username, email, password) {
        this.username = username;
        this.email = email;
        this.password = password;
    }

    encryptPass() {
        return `${this.password} abc`
    }
}

const chai = new User('rishi_s_s', 'rishi.soni@gmail.com', 'rishi123');
console.log(chai.encryptPass());