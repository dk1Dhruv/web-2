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

// 3. Employee and Manager Payroll System
// Create a base class Employee containing id, name, and basicSalary. Initialize them using a constructor and create a method calculateSalary() that returns the basic salary. Create a derived class Manager that adds an incentive property. Use super() to initialize inherited properties and override calculateSalary() so that a manager's total salary is calculated as basicSalary + incentive. Create objects of both classes and display their salaries.
// Concepts Covered: Inheritance, extends, super(), Constructor, Method Overriding
// 
// Base class
class Employee {
    constructor(id, name, basicSalary) {
        this.id = id;
        this.name = name;
        this.basicSalary = basicSalary;
    }

    calculateSalary() {
        return this.basicSalary;
    }
}

// Derived class
class Manager extends Employee {
    constructor(id, name, basicSalary, incentive) {
        super(id, name, basicSalary);
        this.incentive = incentive;
    }

    // Method overriding
    calculateSalary() {
        return this.basicSalary + this.incentive;
    }
}

// Employee object
let emp = new Employee(101, "Rahul", 30000);

// Manager object
let manager = new Manager(102, "Amit", 50000, 10000);

// Display salaries
console.log("Employee Salary:", emp.calculateSalary());
console.log("Manager Salary:", manager.calculateSalary());


console.log("--------------------------------------------------\n");

// 4. E-Commerce Product System
// Create a class Product with productId, productName, and price. Add an instance method getDiscountedPrice(discount) to calculate the final price. Create a static method compareProducts(p1, p2) that accepts two Product objects and displays the product having the higher price. Create a derived class Electronics having an additional property warranty. Override a suitable display method so that electronics-specific information is also displayed.
// Concepts Covered: Objects as Arguments, Static Method, Instance Method, Inheritance, Overriding


class Product{
    
 constructor(productId, productName,price){
this.productId=productId;
this.productName=productName;
this.price=price;
} 
getDiscountedPrice(discount) {
    discount/=100;
    discount*=this.price;
     return this.price-=discount;
}
  display() {
        console.log("Product ID:", this.productId);
        console.log("Product Name:", this.productName);
        console.log("Price:", this.price);
    }
     static compareProducts(p1, p2) {
        if (p1.price > p2.price) {
            console.log(p1.productName, "has higher price");
        } else if (p2.price > p1.price) {
            console.log(p2.productName, "has higher price");
        } else {
            console.log("Both products have same price");
        }
    }
};
class Electronics extends Product {
    constructor(productId, productName, price, warranty) {
        super(productId, productName, price);
        this.warranty = warranty;
    }
    display() {
        console.log("Product ID:", this.productId);
        console.log("Product Name:", this.productName);
        console.log("Price:", this.price);
        console.log("Warranty:", this.warranty);
    }
}

let p1 = new Product(101, "Shoes", 2000);
let p2 = new Electronics(102, "Laptop", 50000, "2 Years");
console.log("Product 1:");
p1.display();

console.log("\nProduct 2:");
p2.display();

console.log("\nDiscounted Price of Shoes:", p1.getDiscountedPrice(10));

console.log("\nComparison:");
Product.compareProducts(p1, p2);



console.log("--------------------------------------------------\n");

