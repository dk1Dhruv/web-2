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
// /2. Bank Account Management System
// Create a class BankAccount with accountNo, holderName, and balance. Use a constructor to initialize the account. Provide instance methods deposit(amount), withdraw(amount), and displayBalance(). Withdrawal should not be allowed when the requested amount is greater than the available balance. Create a static method bankInfo() that displays the bank name and general banking information. Create two account objects and perform different transactions on them.
// Concepts Covered: Constructor, Objects, Instance Methods, Static Method, Object State

class BankAccount{

 constructor(accountNo, holderName,balance){
this.accountNo=accountNo;
this.holderName=holderName;
this.balance=balance;
}   

deposit(amount){
    this.balance += amount;
    console.log("Deposited:", amount, "New Balance:", this.balance);
}
withdraw(amount){
    if(amount> this.balance){
        console.log("Insufficient Balance");
    } else{
        this.balance -= amount;
        console.log("Withdrawn:", amount, "New Balance:", this.balance);
    }
}
static bankinfo(){
    console.log("Bank Name: XYZ Bank");
    console.log("Branch: Main Branch");
    console.log("IFSC Code: XYZ123456");
}
displayInfo(){
       BankAccount.bankinfo();
    console.log("Account No:", this.accountNo);
    console.log("Holder Name:", this.holderName);
    console.log("Balance:", this.balance);
 
}

};
let b1=new BankAccount(12345,"dhruv",1000);
let b2=new BankAccount(12346,"anuj",2000);
b1.deposit(500);
b1.withdraw(200);
b1.displayInfo();
b2.deposit(1000);
b2.withdraw(3000);
b2.displayInfo();

console.log("--------------------------------------------------\n");

