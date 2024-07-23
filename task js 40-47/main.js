// 47 اختبار في الفيديو 


let zero = 0;

let counter = 3;

let my = ["Ahmed", "Mazero", "Elham", "Osama", "Gamal", "Ameer"];

// Write Code Here


console.log(my.slice(zero, counter).concat(my[counter]).reverse()); // ["Osama", "Elham", "Mazero", "Ahmed"];

console.log(my.slice(1, counter).reverse()); // ["Elham", "Mazero"]

my.unshift("Elzero")

console.log(my[zero]); // "Elzero"

my.unshift("zoz")

console.log(my[counter][4] + my[counter][5].toUpperCase()); // "rO"



// تكليف 1


let myFriends = ["Ahmed", "Elham", "Osama", "Gamal"];
let num = 3;

// Method 1
console.log(myFriends.slice(0, num)); // ["Ahmed", "Elham", "Osama"];

// Method 2
myFriends.pop()
console.log(myFriends); // ["Ahmed", "Elham", "Osama"];


// تكليف 2


let friends = ["Ahmed", "Eman", "Osama", "Gamal"];

// Write Your Code Here

friends.pop()
friends.shift()

console.log(friends); // ["Eman", "Osama"]



// تكليف 3


let arrOne = ["C", "D", "X"];
let arrTwo = ["A", "B", "Z"];
let finalArr = [];

// Write One Single Line Of Code

console.log(finalArr.concat(arrOne, arrTwo).sort().reverse()); // ["Z", "X", "D", "C", "B", "A"]



// تكليف 4



let website = "Go";
let words = [`${website}ogle`, "Facebook", ["Elzero", "Web", "School"]];

console.log(words)

console.log(words[2][0].slice(2, 6).toUpperCase()); // ZERO



// تكليف 5



let needle = "JS";
let haystack = ["PHP", "JS", "Python"];

// Write 3 Solutions

console.log(haystack.includes(needle));
console.log(haystack.indexOf(needle));
console.log(haystack.lastIndexOf(needle));

if (haystack.includes(needle)) {
    console.log("found")
}
if (haystack.indexOf(needle) == 1) {
    console.log("found")
}



// تكليف 6

let arr1 = ["A", "C", "X"];
let arr2 = ["D", "E", "F", "Y"];
let allArrs = [];

// Your Code Here

console.log(allArrs.concat(arr1, arr2).sort().slice(4, 8)); // fxy