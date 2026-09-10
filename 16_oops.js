// create the opps and constructor function,normal methods and static methods
class student {

    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
    static hello() {
        return 'Homo sapiens';
    }
};
let s1=new student('Alice', 20);
let s2=new student('Bob', 22);
student.hello();
s1.greet();
s2.greet();