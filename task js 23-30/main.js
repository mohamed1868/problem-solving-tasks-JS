// حل كويز في الفيديو 26


let a = 100;
let b = 200.5;
let c = 1e2;
let d = 2.4;

// Find Smallest Number In All Variables And Return Integer
console.log(Math.round(d));

// Use Variables a + d One Time To Get The Needed Output
console.log(a ** Math.floor(d)); // 10000
console.log(Math.pow(a, Math.floor(d))); // 10000

// Get Integer "2" From d Variable With 4 Methods
console.log(Math.round(d));
console.log(Math.floor(d));
console.log(Math.trunc(d));
console.log(Math.min(Math.trunc(d), a, c, d));

// Use Variables b + d To Get This Valus
console.log((Math.floor(b) / Math.ceil(d)).toFixed(2)); // 66.67 => String
console.log(Math.ceil(Math.floor(b) / Math.ceil(d))); // 67 => Number


// تكليف من 23 لي 26


// تكليف 1


console.log(100000); // 100000
console.log(100000); // 100000
console.log(5e4 + 5e4); // 100000
console.log(10000 * 10); // 100000
console.log(1e2 * 1e3); // 100000
console.log(10 ** 5); // 100000
console.log(Math.pow(10, 5)); // 100000
console.log(Math.round(99999.6)); // 100000
console.log(Math.ceil(99999.2)); // 100000
console.log(10000000000 / 100000); // 100000
console.log(200000 - 100000); // 100000
console.log(Math.trunc(100000.5)); // 100000


// تكليف 2

console.log(-(Number.MIN_SAFE_INTEGER))

// تكليف 3


console.log(Number.MAX_VALUE % Number.MAX_SAFE_INTEGER + 16)


// تكليف 4


let myVar = "100.56789 Views";


console.log(parseInt(myVar)); // 100
console.log(parseFloat(myVar).toFixed(2)); // 100.57


// تكليف 5


let num = 10;

console.log(+Number.isInteger(num) + +Number.isInteger(num)); // 2


// تكليف 6


let flt = 10.4;

console.log(Math.round(flt)); // 10
console.log(Math.floor(flt)); // 10
console.log(Math.trunc(flt)); // 10
console.log(Math.ceil(flt - 1)); // 10
console.log(Math.min(Math.floor(flt), Math.ceil(flt))); // 10


// تكليف 7

let ana = Math.random()
console.log(Math.round(ana * 4));
// حل تاني
console.log(Math.round(Math.random() * 4));


// تكليف من 27 لي 30


// حل كويز في الفيديو 30


let a1 = "Elzero Web School";

// Include This Method In Your Solution [slice, charAt]
console.log(a1.charAt(2).toUpperCase() + a1.slice(3, 6)); // Zero

// 8 H
console.log(a1[13].repeat(8).toUpperCase()); // HHHHHHHH

// Return Array
console.log(a1.split(" ", 1)); // ["Elzero"]

// Use Only "substr" Method + Template Literals In Your Solution
console.log(a1.substr(0, 6), a1.substr(-6, 6)); // Elzero School

// Solution Must Be Dynamic Because String May Changes
console.log(a1[0].toLowerCase() + a1.slice(1, 16).toUpperCase() + a1[16].toLowerCase()); // eLZERO WEB SCHOOl


// تكليف 1


let userName = "Elzero";
console.log(userName[0].toLowerCase()); // e
console.log(userName[0].charAt(0).toLowerCase()); // e
console.log(userName.slice(0, 1).toLowerCase()); // e
console.log(userName.substring(0, 1).toLowerCase()); // e
console.log(userName.substr(0, 1).toLowerCase()); // e
console.log(userName[0].toLowerCase().repeat(3)); // eee


// تكليف 2


let word = "Elzero";
let letterZ = "z";
let letterE = "e";
let letterO = "O";

console.log(word.includes("z")); // True
console.log(word.startsWith("E")); // True
console.log(word.endsWith("o")); // True