// اختبار في فيديو 56

let myAdmins = ["Ahmed", "Osama", "Sayed", "Stop", "Samera"];
let myEmployees = ["Amgad", "Samah", "Ameer", "Omar", "Othman", "Amany", "Samia", "Anwar"];
let nam = 1
let nam1 = 1
let nam2 = 1


document.write(`<br><div style="font-size:20px">We Have X Admins</div>`);
document.write(`<br><div style="font-size:20px">We Have 3 Admins</div><br>`);
for (let i = 0; i < myAdmins.length; i++) {
    document.write(`<hr> <br><div style="font-size:20px"> The Admin For Team ${i + 1 } is ${myAdmins[i]}</div><br>
<div style="font-size:40px ; font-weight;bold">Team Members</div><br>`)
    for (let j = 0; j < myEmployees.length; j++) {


        if (myAdmins[i].startsWith("A") && myEmployees[j].startsWith("A") === true) {

            document.write(`<div style="font-size:20px ; margin:5px" > - ${nam++} ${myEmployees[j]}</div> <br>`)

        } else if (myAdmins[i].startsWith("O") && myEmployees[j].startsWith("O") === true) {

            document.write(`<div style="font-size:20px ; margin:5px" > - ${nam1++} ${myEmployees[j]}</div><br>`)

        } else if (myAdmins[i].startsWith("S") && myEmployees[j].startsWith("S") === true) {

            document.write(`<div style="font-size:20px ; margin:5px" > - ${nam2++} ${myEmployees[j]}</div><br>`)

        }
    }
    if (myAdmins[i] === "Sayed") {
        break
    }
}


// من 48 لي 53



// تكليف 1


let start = 10;
let end = 100;
let exclude = 40;

for (let i = start; i <= end; i += start) {
    if (i === exclude) {
        continue;
    }
    console.log(i)
}


// تكليف 2


let start1 = 10;
let end1 = 0;
let stop = 3;


for (let i = start1; i >= stop; i--) {

    console.log(i == start1 ? i : end1.toString() + i)


}


// تكليف 3


let start2 = 1;
let end2 = 6;
let breaker = 2;

for (let i = start2; i <= end2; i++) {
    console.log(i)
    for (let h = breaker; h < end2; h += breaker) {
        console.log(`--${h}`)
    }
}


// تكليف 4


let index1 = 10;
let jump = 2;

for (let i = index1; i > jump; i -= jump) {
    console.log(i)
}


// تكليف 5



let friends2 = ["Ahmed", "Sayed", "Eman", "Mahmoud", "Ameer", "Osama", "Sameh"];
let letter = "A";

for (let i = 0; i < friends2.length; i++) {
    if (friends2[i].startsWith(letter) === false) {
        console.log(`${i}-${friends2[i]}`)
    }

}


// تكليف 6

let start5 = 0;
let swappedName = "elZerO";
let o = ""
for (let i = start5; i < swappedName.length; i++) {
    if (swappedName[i] === swappedName[i].toUpperCase()) {
        o += swappedName[i].toLowerCase()
    } else if (swappedName[i] === swappedName[i].toLowerCase()) {
        o += swappedName[i].toUpperCase()
    }
}
console.log(o)



"ELzERo"


// تكليف 7

let star5t = 0;
let mix = [1, 2, 3, "A", "B", "C", 4];

for (let i = star5t; i < mix.length; i++) {
    if (mix[i] === mix[star5t]) {
        continue
    } else if (typeof mix[i] === "number") {
        console.log(mix[i])
    }

}


// تكليف تاني 



let friends1 = ["Ahmed", "Sayed", "Ali", 1, 2, "Mahmoud", "Amany"];
let index = 0;
let counter = 0;

while (index < friends1.length) {
    if (typeof friends1[index] === "number" || friends1[index].startsWith("A")) {
        index++
        continue;

    }

    console.log(`"${++counter} => ${friends1[index]}"`);
    index++;
}