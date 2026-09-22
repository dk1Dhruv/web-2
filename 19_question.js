// 1. University Student Management System
// Create a class Student having rollNo, name, and marks. Initialize these properties using a constructor. Create an instance method displayResult() that displays student details and determines whether the student has passed. Create a static property/method to maintain and display the total number of Student objects created. Create at least three Student objects and demonstrate all methods.
// Concepts Covered: Class, Object, Constructor, Instance Method, Static Method

class student{
    static count=0;
 constructor(name,roll,marks){
this.name=name;
this.roll=roll;
this.marks=marks;
student.count++;
}
displayResult(){
console.log(this.name, this.roll, this.marks);
if(this.marks>=35){
    console.log("Pass");
} else {
    console.log("Fail");
}
}
};
let s1=new student("dhruv",101,90);
let s2=new student("anuj",102,30);
let s3=new student("rahul",103,50);
s1.displayResult();
s2.displayResult();
s3.displayResult();
console.log("Total Students:", student.count);

console.log("--------------------------------------------------\n");






