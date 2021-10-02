const PersonObj = require('./person');

class Teacher extends PersonObj.Person{
    constructor(name, age, gender, interests, subject){
        super(name, age, gender, interests);
        this.subject = subject;
    }

    showInfo(){
        console.log('Teacher info: ', this.name, this.age , this.gender, this.interests, ', the subject is: ', this.subject);
    }
}

exports.Teacher = Teacher;