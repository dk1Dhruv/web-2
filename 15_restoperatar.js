
        function sum(...values) {
   let total = 0;
    for (let n of values) {
        total =total+n;
    }
    return total;
}
console.log(sum(1, 2, 3, 4, 5)); // Output: 15

function s(name,...values){
    console.log("name:",name);
    let total = 0;
    for (let n of values) {
        total =total+n;
    }
    
    console.log("total:",total);
}
s("Sum", 1, 2, 3, 4, 5); // Output: Sum: 15