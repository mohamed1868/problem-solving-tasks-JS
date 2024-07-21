// تكايف من الفبدبو 31 -32


// تكليف 1


console.log(100 == "100"); // true
console.log(100 < 1000); // true
console.log(110 > 100 > 10 < 20); // true
console.log(-10 == "-10"); // true
console.log(!(-50 === "-10" + "-40")); // true
console.log(!(10 == 50 - "-40")); // true
console.log(!("10" === 10)); // true
console.log(!(20 == false)); // true


// تكليف 2

let num5 = 10;
let num6 = 20;

console.log(num5 < num6); // true
console.log(num5 <= num6); // true
console.log(!(num5 > num6)); // true
console.log(!(num5 >= num6)); // true
console.log(!(num5 === num6)); // true
console.log(num5 != num6); // true


// تكليف 3


let a = 20;
let b = 30;
let c = 10;

console.log(a < b && a > c || a == b); // true
console.log(a > b || a > c); // true
console.log(!((a < b) && !(a > b) && !(a < c) && (a < c))); // true


// اختبار في الفيديو 37

// الاختبار 1

let a2 = 10;

if (a2 < 10) {
    console.log(10);
} else if (a2 >= 10 && a2 <= 40) {
    console.log("10 To 40");
} else if (a2 > 40) {
    console.log("> 40");
} else {
    console.log("Unknown");
}

a2 < 10 ?
    console.log(10) :
    a2 >= 10 && a2 <= 40 ?
    console.log("10 To 40") :
    a2 > 40 ?
    console.log("> 40") :
    console.log("Unknown");


// الاختبار 2


let st = "Elzero Web School";

if (typeof st === typeof "34") {
    console.log("Good");
}

if (st[7].toLowerCase() === "w") {
    console.log("Good");
}

if (st[5] !== "string") {
    console.log("Good");
}

if (st.slice(0, 6).repeat(2) === "ElzeroElzero") {
    console.log("Good");
}


// تكايف من الفبدبو 33 -37


// تكليف 1

let num01 = 9; // "009"

num01 < 10 ? console.log("00" + num01) : console.log("error");
if (num01 < 10) {
    console.log("00" + num01);
}

let num = 20; // "020"
num > 10 && num < 100 ? console.log("0" + num) : console.log("error");
if (num > 10 && num < 100) {
    console.log("0" + num);
}

let num10 = "110"; // "110"
num10 >= 100 ? console.log(num10) : console.log("error");
if (num10 >= 100) {
    console.log(num10);
}


// تكليف 2


let num7 = 9;
let str = "9";
let str2 = "20";

if (num7 == str) {
    console.log("output")
}
if (num7 === str) {
    console.log("no")
} else {
    console.log("output")
}
if (num7 === str2) {
    console.log("no")
} else {
    console.log("output")
}
if (str === str2) {
    console.log("no")
} else {
    console.log("output")
}


// تكليف 3


let num11 = 10;
let num22 = 30;
let num33 = "30";

if (num33 > num11 && typeof num33 !== typeof num22) {
    console.log("1")

} else if (num33 > num11 && num33 == num22 && typeof num33 !== typeof num22) {

    console.log("2")
} else if (num33 !== num1 && typeof num33 !== typeof num22) {
    console.log("3")

}


// تكليف 4


let num1 = 10;
let num2 = 10;
let num3 = "10";
let num4 = 20;


if (num1 === num2) {
    console.log("True");
} else {
    console.log("False");
}

if (num1 <= num2 && num1 < num4) {
    console.log("True");
} else {
    console.log("False");
}

if (num1 <= num2 && num1 == num3) {
    console.log("True");
} else {
    console.log("False");
}

if ((num1 + num2) <= num4) {
    console.log("True");
} else {
    console.log("False");
}

if ((num1 + +num3) <= num4) {
    console.log("True");
} else {
    console.log("False");
}

if ((num1 + num2 + +num3) > num4) {
    console.log("True");
} else {
    console.log("False");
}

if (num4 - (num1 + +num3) + num2 <= 21) {
    console.log("True");
} else {
    console.log("False");
}



// اختبار في الفيديو 39


// الاختبار 1


let job = "Developer";
let salary = 0;

if (job === "Manager") {
    salary = 8000;
} else if (job === "IT" || job === "Support") {
    salary = 6000;
} else if (job === "Developer" || job === "Designer") {
    salary = 7000;
} else {
    salary = 4000;
}


switch (job) {
    case "Manager":
       salary = 8000; 
        console.log(salary)
        break
    case "IT":
    case "Support":  
        salary = 6000; 
        console.log(salary)
        break
    case "Developer":
    case "Designer": 
        salary = 7000; 
        console.log(salary)
        break
    default:
        salary = 4000; 
        console.log(salary)
        break
}


// الاختبار 2


let holidays = 1;
let money = 0;

switch (holidays) {
    case 0:
        money = 5000;
        console.log(`My Money is ${money}`);
        break;
    case 1:
    case 2:
        money = 3000;
        console.log(`My Money is ${money}`);
        break;
    case 3:
        money = 2000;
        console.log(`My Money is ${money}`);
        break;
    case 4:
        money = 1000;
        console.log(`My Money is ${money}`);
        break;
    case 5:
        money = 0;
        console.log(`My Money is ${money}`);
        break;
    default:
        money = 0;
        console.log(`My Money is ${money}`);
}

if (holidays == 0) {
    money = 5000;
    console.log(`My Money is ${money}`);

} else if (holidays == 1 || holidays == 2) {
    money = 3000;
    console.log(`My Money is ${money}`);

} else if (holidays == 3) {
    money = 2000;
    console.log(`My Money is ${money}`);

} else if (holidays == 4) {
    money = 1000;
    console.log(`My Money is ${money}`);

} else if (holidays == 5) {
    money = 0;
    console.log(`My Money is ${money}`);

} else {
    money = 0;
    console.log(`My Money is ${money}`);
}


// تكليف  1 


let day = "Wednesday";


switch (day) {
    case "friday":
    case "Saturday":
    case "Sunday":
        console.log("No Appointments Available");
        break
    case "Monday":
    case "Thursday":
        console.log("From 10:00 AM To 5:00 PM");
        break
    case "Tuesday":
        console.log("From 10:00 AM To 6:00 PM");
        break
    case "Wednesday":
        console.log("From 10:00 AM To 7:00 PM");
        break
    default:
        console.log("Its Not A Valid Day");
}
