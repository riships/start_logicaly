class User {
    constructor(username) {
        this.username = username;
    }
    logMe() {
        console.log(`Username is : ${this.username}`);
    }
}


class Teacher extends User {
    constructor(username, email, password) {
        super(username)
        this.email = email
        this.password = password
    }

    addCourse() {
        console.log(`A new course added by ${this.username}`);
    }
}

const myUser = new Teacher('myName', 'myuser@mail.com', 'myuser@123')
myUser.addCourse();


const mycourse = new User('userIsTrue')
mycourse.logMe()


console.log(myUser instanceof User);