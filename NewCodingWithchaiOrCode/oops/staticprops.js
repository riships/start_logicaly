class User {
    constructor(username) {
        this.username = username
    }

    logMe() {
        console.log(`This is my UserName : ${this.username}`);
    }

    createId() {
        return `123`
    }
}


const myUser = new User('rishi_s_s');

console.log(myUser.createId());


class Teacher extends User {
    constructor(username, email) {
        super(username);
        this.email = email
    }
}


const iPhone = new Teacher('iphone', 'iphone@mail.com');

console.log(iPhone.createId());