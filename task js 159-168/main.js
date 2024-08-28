// التكليف 1

// let datenow = new Date()
// let birthday = new Date(2003, 9, 6)
// let done = datenow - birthday
// console.log(`${done/1000} Seconds`)
// console.log(`${done/1000/60} Minutes`)
// console.log(`${done/1000/60/60} Hours`)
// console.log(`${done/1000/60/60/24} Days`)
// console.log(`${done/1000/60/60/24/30} Months`)
// console.log(`${done/1000/60/60/24/30/12} Years`)



// التكليف 2



// let datenow = new Date()
// datenow.setTime(11 * 12 * 30 * 24 * 60 * 60 * 1000)
// datenow.setSeconds(1)
// datenow.setHours(0)
// console.log(datenow)



// // التكليف 3

// let datenow = new Date()
// datenow.setDate(-1)
// let m = datenow.getDate()
// let s = datenow.getMonth()
// const months = [
//     'January', 'February', 'March', 'April', 'May', 'June',
//     'July', 'August', 'September', 'October', 'November', 'December'
// ];
// const monthName = months[s];
// console.log(monthName);
// console.log(datenow)

// console.log(`Previous Month Is ${monthName} And Last Day Is${m}`)




// // التكليف 4


// let daree = Date.parse("2003-9-6")


// let date1 = new Date("2003-9-6")
// let date2 = new Date(2003, 9, 6)
// let date3 = new Date("sep-6-2003")

// console.log(date3)
// console.log(date1)
// console.log(date2)



// التكليف 5



// let start = performance.now()
// for (let i = 0; i <= 99999; i++) {
//     console.log(i)
// }
// let end = performance.now()
// let done = end - start
// console.log(Math.trunc(done))



// // التكليف 6



// function* gen() {
//     yield 14;
//     yield 154;
//     yield 494;
//     yield 1034;
//     yield 1774;
//     yield 2714;
//     yield 3854;
//     yield 5194;
//     yield 6734;
// }

// let generator = gen();

// console.log(generator.next()); // {value: 14, done: false}
// console.log(generator.next()); // {value: 154, done: false}
// console.log(generator.next()); // {value: 494, done: false}
// console.log(generator.next()); // {value: 1034, done: false}
// console.log(generator.next()); // {value: 1774, done: false}
// console.log(generator.next()); // {value: 2714, done: false}
// console.log(generator.next()); // {value: 3854, done: false}
// console.log(generator.next()); // {value: 5194, done: false}
// console.log(generator.next()); // {value: 6734, done: false}



// // التكليف 7


// function* genNumbers() {
//     yield* new Set([1, 2, 2, 2, 3, 4, 5]);
// }

// function* genLetters() {
//     yield* new Set(["A", "B", "B", "B", "C", "D"]);
// }


// function* genAll() {
//     yield* genNumbers();
//     yield* genLetters();
// }


// // Write Your Generator Function Here

// let generator = genAll();

// console.log(generator.next()); // {value: 1, done: false}
// console.log(generator.next()); // {value: 2, done: false}
// console.log(generator.next()); // {value: 3, done: false}
// console.log(generator.next()); // {value: 4, done: false}
// console.log(generator.next()); // {value: 5, done: false}
// console.log(generator.next()); // {value: "A", done: false}
// console.log(generator.next()); // {value: "B", done: false}
// console.log(generator.next()); // {value: "C", done: false}
// console.log(generator.next()); // {value: "D", done: false}


// التكليف 8


// import * as modOne from "./mo.js";

// console.log(modOne.numOne + modOne.numTwo + modOne.numThree); // 60