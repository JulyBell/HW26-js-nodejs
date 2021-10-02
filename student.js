const PersonObj = require('./person');

class Student extends PersonObj.Person{
    constructor(name, age, gender, interests){
        super(name, age, gender, interests);
    }
}

exports.Student = Student;
