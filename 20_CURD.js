const EventEmitter = require('events');

const b = new EventEmitter();

b.on('greet', (name) => {
    console.log(`Welcome ${name} in class B`);
});

b.emit('greet', 'Dhruv');

b.on('exit', (num) => {
    console.log(`Welcome ${num} in class B`);
});

b.emit('exit', 100);