// class Animal {
//     eat() {
//         console.log("Animal is eating");
//     }
// }

// class Dog extends Animal {
//     bark() {
//         console.log("Dog is barking");
//     }
// }

// let d = new Dog();

// d.eat();   // inherited method
// d.bark();  // Dog's own method


// Inheritance with Constructor
// class Animal {
//     constructor(name) {
//         this.name = name;
//     }

//     show() {
//         console.log(this.name);
//     }
// }

// class Dog extends Animal {
//     constructor(name, age) {
//         super(name);
//         this.age = age;
//     }

//     display() {
//         console.log(this.name, this.age);
//     }
// }

// let d = new Dog("Tommy", 3);

// d.show();
// d.display();


// types of inheritance

// 1. Single Inheritance
// class Animal {
//     eat() {
//         console.log("Eating");
//     }
// }

// class Dog extends Animal {
//     bark() {
//         console.log("Barking");
//     }
// }

// 2. Multilevel Inheritance
// class Animal {
//     eat() {
//         console.log("Eating");
//     }
// }

// class Dog extends Animal {
//     bark() {
//         console.log("Barking");
//     }
// }

// class Puppy extends Dog {
//     play() {
//         console.log("Playing");
//     }
// }

// 3. Hierarchical Inheritance
class Animal {
    eat() {
        console.log("Eating");
    }
}

class Dog extends Animal {
    bark() {
        console.log("Barking");
    }
}

class Cat extends Animal {
    meow() {
        console.log("Meowing");
    }
}

// 4. Hybrid Inheritance
// class Animal {
//     eat() {
//         console.log("Eating");
//     }
// }
// class Dog extends Animal {
//     bark() {
//         console.log("Barking");
//     }
// }
// class Cat extends Animal {
//     meow() {
//         console.log("Meowing");
//     }
// }
// class Hybrid extends Dog {
//     play() {
//         console.log("Playing");
//     }
// }
// let h = new Hybrid();
// h.eat();
// h.bark();
// h.play();
// 