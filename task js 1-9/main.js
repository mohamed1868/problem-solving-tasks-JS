// التكليف 2

window.onload = function() {
    document.querySelector("h1").style.color = "blue";
    document.querySelector("h1").style.fontSize = "40px";
    document.querySelector("h1").style.fontWeight = "bold";
    document.querySelector("h1").style.textAlign = "center";
};

// لو عايزه في console

console.log("%c Elzero" , "color:blue ; fontsize:40px ; fontweight:bold ; textalign:center ")

// التكليف 3

console.log(" %c Elzero %c Web %c School",
    "color:  red; font-size:40px;font-weight:bold",
    "color:  green; font-size:40px;font-weight:bold",
    "color:  blue; font-size:40px;font-weight:bold");

// التكليف 3

console.group("Group 1");
console.log("one massage ")
console.log("two massage ")

console.group("Child Group");
console.log("one massage ")
console.log("two massage ")



console.group("Granp Child Group");
console.log("one massage ")
console.log("two massage ")
console.groupEnd("Group 1")

console.group("Group 2");
console.log("one massage ")
console.log("two massage ")


// التكليف 4

console.table(["Elzero", "ahmed", "ana", "mohamed", "sayed"]);