let teacherImp = require('./teacher');
let studentImp = require('./student');

let teacher1= new teacherImp.Teacher('Alexander', 45, 'male', 'swimming', 'Math');
teacher1.showInfo();

let teacher2= new teacherImp.Teacher('John', 37, 'male', 'experiments', 'Chemistry');
teacher2.showInfo();

let student1 = new studentImp.Student('Larry', 18, 'male', 'skating');
student1.showInfo();

let student2 = new studentImp.Student('Daisy', 20, 'female', 'gymnastics');
student2.showInfo();