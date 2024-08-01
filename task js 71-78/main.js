// اختبار فيديو 78

let myString = "1,2,3,EE,l,z,e,r,o,_,W,e,b,_,S,c,h,o,o,l,2,0,Z";

let mySolution = myString.split("").filter(function(ele) {
        return ele !== ",";
    }).map(function(ele) {
        return isNaN(ele) === true ? ele : "";
    }).map(function(ele) {
        return ele === "_" ? " " : ele
    })
    .reduce(function(acc, current) {
        return acc + current;
    }).slice(1, -isNaN(myString));

console.log(mySolution);
// Elzero Web School


// تكليف 1



let mix = [1, 2, 3, "E", 4, "l", "z", "e", "r", 5, "o"];

let m = mix.map(function(ele) {
    return typeof ele === "string" ? ele : ""
}).reduce(function(cla, clac) {
    return cla + clac
})

console.log(m)
    // Elzero


// تكليف 2



let myString1 = "EElllzzzzzzzeroo";

let e = myString1.split("").filter(function(ele, index) {

    return myString1.indexOf(ele) === index
}).join("")

console.log(e)



// تكليف 3


let myArray = ["E", "l", "z", ["e", "r"], "o"];

let q = myArray.reduce(function(co, ce) {
    return co + ce
}).replace(",", "")

// حل اخر

let newArray = myArray.reduce(function(acc, current) {
    return acc.concat(current);
}).split("").filter(function(ele) {
    return ele !== ",";
})


console.log(q)
    // Elzero



// تكليف 4



let numsAndStrings = [1, 10, -10, -20, 5, "A", 3, "B", "C"];

let w = numsAndStrings.filter(function(ele) {
    return typeof ele === "number"
}).map(function(ele) {
    return ele === +ele ? -ele : ele
})

console.log(w)
    // [-1, -10, 10, 20, -5, -3]



// تكليف 5




let nums = [2, 12, 11, 5, 10, 1, 99];
let f = nums.reduce(function(ac, co) {
    return co % 2 === 0 ? ac * co : ac + co
}, 1)

console.log(f)