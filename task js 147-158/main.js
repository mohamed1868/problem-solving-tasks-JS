// // التكليف 1


// class Car {
//     constructor(name, model, price) {
//         this.n = name;
//         this.m = model;
//         this.p = price;
//     }
//     run() {
//         return `Car Is Running Now `
//     }
//     stop() {
//         return `Car Is Stopped`
//     }
//     massage() {
//         return `Car Name Is ${this.n} And Model Is ${this.m} And Price Is ${this.p}`
//     }
// }

// let carOne = new Car("Z1000", 2020, 125000)
// let carTwo = new Car("H2", 2020, 100000)
// let carThree = new Car("Cbr", 2020, 525000)

// console.log(carOne.massage())
// console.log(carOne.run())
// console.log(carTwo.massage())
// console.log(carOne.run())
// console.log(carThree.massage())
// console.log(carOne.run())



// // التكليف 2



// class Phone {
//     constructor(name, serial, price) {
//         this.name = name;
//         this.serial = serial;
//         this.price = price || "Unknown";
//     }
// }

// class Tablet extends Phone {
//     constructor(name, serial, Size, price) {
//         super(name, serial, price),
//             this.s = Size
//     }
//     fullDetails() {
//         return `${this.name} Serial is ${this.serial} And ${this.s} is ${this.price}`
//     }
// }

// let TabletOne = new Tablet("iPad", 100200300, 1500, 12.9);
// let TabletTwo = new Tablet("Nokia", 350450650, 800, 10.5);
// let TabletThree = new Tablet("LG", 250450650, 650);

// console.log(`${TabletOne.fullDetails()}`);
// // iPad Serial is 100200300 And Size Is 12.9

// console.log(`${TabletTwo.fullDetails()}`);
// // Nokia Serial is 350450650 And Size Is 10.5

// console.log(`${TabletThree.fullDetails()}`);
// // LG Serial is 250450650 And Size Is Unknown



// // التكليف 3


// class User {
//     #c
//     constructor(username, card) {
//         this.u = username;
//         this.#c = card.toString();
//     }
//     showData() {
//         return `Hello ${this.u} Your Credit Card Number Is ${this.#c.match(/\w{4}/g).join('-')}`
//     }

// }

// // Do Not Edit Anything Below

// let userOne = new User("Osama", "1234-5678-1234-5678");
// let userTwo = new User("Ahmed", "1234567812345678");
// let userThree = new User("Ghareeb", 1234567812345678);


// console.log(userOne.showData());
// // Hello Osama Your Credit Card Number Is 1234-5678-1234-5678

// console.log(userTwo.showData());
// // Hello Ahmed Your Credit Card Number Is 1234-5678-1234-5678

// console.log(userThree.showData());
// // Hello Ghareeb Your Credit Card Number Is 1234-5678-1234-5678

// console.log(userOne.c); // Prevent Accessing To Card Property Here
// // Undefined



// // التكليف 4

// let myStr = "Elzero";
// Object.prototype.addLove = function() {
//     return `I Love ${this} Web School`
// }
// console.log(myStr.addLove()); // I Love Elzero Web School


// // التكليف 5

// const myObj = {
//     username: "Elzero",
//     id: 100,
//     score: 1000,
//     country: "Egypt",
// };

// Object.defineProperties(myObj, {
//     score: {
//         writable: false,
//         enumerable: true
//     },
//     id: {
//         enumerable: false,

//     },
//     country: {
//         enumerable: false,

//     }
// })

// myObj.score = 500;

// for (let prop in myObj) {
//     console.log(`${prop} => ${myObj[prop]}`);
// }
// console.log(myObj);

// // "username => Elzero"
// // "score => 1000" { username: 'Elzero', score: 1000, id: 100 }