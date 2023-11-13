console.log("Hello Rishi");


class myNewAdmissionForm {
    constructor(givenname, ageNum) {
        this.fill(givenname, ageNum);
    }
    submit() {
        document.write('Hello ' + this.name + ' your form have been submited we will contact you as soon as possible.')
    }
    cancel() {
        document.write(this.name + ' your form have been canceled.')
    }
    fill(givenname, ageNum) {
        this.name = givenname;
        this.age = ageNum;
    }
}
let form1 = new myNewAdmissionForm('Rishi Prakash Soni', 21);
form1.submit();
