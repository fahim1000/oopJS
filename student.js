// const student ={
//    name:'John',
//    age:12,
//    email: "sazidnx23@yopmail.com",
//    getName: function(){
//     console.log(student)
//    }

// }

// console.log(student)

// const student1={
//     name:'Selo',
//     age:22,
//     email:"selo23@yopmail.com",
//     getName: function(){
//         console.log(student2)
//        }
// }

// function Student(name, age, email){
//     this.name=name;
//     this.age=age;
//     this.email=email;
//     this.getName=function(){
//         console.log(this.name, this.age, this.email);
//     }

// }

// const student=new Student("jak", 12, 'xyz@yopmail.com');
// const student2=new Student("ak", 122, 'xyz23@yopmail.com');

// student.getName();
// student2.getName();


class Student{
    constructor(name, age, email){
        this.name=name;
        this.age=age;
        this.email=email;
    }
    getName(){
        console.log(this.name, this.age, this.email);
    }
}

const student=new Student("jak", 12, 'xyz@yopmail.com');
student.getName();