class Person {
    constructor(name, age, gender, interests){
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.interests = interests;
    }

    showInfo(){
        console.log('General info:', this.name, this.age , this.gender, this.interests);
    }
}   

exports.Person = Person;

