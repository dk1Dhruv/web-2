// arrow function
function hello() {
    console.log("Hello World");
}
let hello1 =function() {
    console.log("Hello World");
}
let helloArrow = () => {
    console.log("Hello World");


}
function physics(marks){
return `Your marks in physics is ${marks}`;
}
physics=(marks) => {
    return `Your marks in physics is ${marks}`;
}
hello();
hello1();
helloArrow();
console.log(physics(90)); 