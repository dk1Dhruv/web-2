// const EventEmitter= require('events');
// // here   EventEmitter predefine
// const b= new EventEmitter();
// b.on('greet',(name)=>
// {
//     console.log(`welcome  ${name} in class B`);
// })
// b.emit('greet',("dhruv"));

// b.on('exit',(num)=>
// {
//     console.log(`welcome  ${num} in class B`);
// })
// b.emit('exit',(100));

// partical 2: we canot create a button  directly we create a button 
const EventEmitter = require("events");

class Button extends EventEmitter {
    click() {
        this.emit("click");
    }
}

const button = new Button();

button.on("click", () => {
    console.log("Button Clicked");
});

button.click();
