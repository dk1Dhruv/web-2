// class student {
//     constructor(name,roll,year){
        
//         this.rollnumber = roll;
//         this.Name = name;
//         this.Year = year;
//     console.log(this.rollnumber);
//     console.log(this.Name);
//     console.log(this.Year);
//     } };
//     let s1=new student();
//     let s2=new student("dhruv",101,2006);
//     let s3=new student("anuj",102,2006);

// class student {
// name="dhruv";
// roll=101;
// year=2006;
//     constructor(name,roll,year){

//         this.roll = roll;
//         this.name = name;
//         this.year = year;
   
//     }
//      display(){
//          console.log(this.roll);
//     console.log(this.name);
//     console.log(this.year);}
// };
//     let s1=new student();
//     let s2=new student("anuj",102,2007);
//     s1.display();
//     s2.display();


// static function
// class student {
//     static fname="dhruv";
//     static  lname="sharma";
//     static fullname(){
//         console.log(this.fname)
//         console.log(this.lname);
//         console.log("\n");
//     }
// }
// let s1=new student();
// student.fullname();

// static function with normal function
class student {
    static fname="dhruv";
    static  lname="sharma";
     fullname(){
        console.log(student.fname)
        // cannot use this.fname because this refers to the instance of the class, not the class itself. Static properties belong to the class, not to any instance of the class.
        console.log(student.lname);
        console.log("\n");
    }
}
let s1=new student();
s1.fullname();

