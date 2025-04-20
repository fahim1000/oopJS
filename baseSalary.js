let sala={

    name:"fahim",
    age:28,
    salary:5000,
    loc:{
        city:"Dhaka",
        country:"BD"
    },
    printData: function(){
        console.log(`${this.name} is ${this.age} years old and his salary is ${this.salary} and he lives in ${this.loc.city}, ${this.loc.country}`);
    }

}

sala.printData();

let x={};

function Sal(){


    this.name="fahim";
    this.age=28;
    this.salary=5000;
    let location = {
        city:"Dhaka",
        country:"BD"
    },
    printData= function(){
        console.log(`${this.name} is ${this.age} years old and his salary is ${this.salary} and he lives in ${location.city}, ${location.country}`);
    }

}


const sal=new Sal();


for(const key in sal){
    console.log(key);
}

const keys=Object.keys(sal);
console.log(keys)

