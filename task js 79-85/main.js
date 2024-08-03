// تكليف 1

let member = {
    name: "Elzero",
    age: 38,
    country: "Egypt",
    fullDetails: function() {
        return `My Name Is ${member.name}, My Age Is ${member.age}, I Live in ${member.country}`
    }

}

console.log(member.name); // Elzero
console.log(member.age); // 38
console.log(member.country); // Egypt
console.log(member.fullDetails());
// My Name Is Elzero, My Age Is 38, I Live in Egypt


// تكليف 2


let objMethodOne = {
    property: "Method One"
}
console.log(objMethodOne.property); // "Method One"

// Method Two
let objMethodTwo = new Object({
    property: "Method Two"
})
console.log(objMethodTwo.property); // "Method Two"

// Method Three
let objMethodThree = new Object({
    property: "Method Three"
})
console.log(objMethodThree.property); // "Method Three"

// Method Four
let objMethodFour = new Object({
    property: "Method Four"
})
console.log(objMethodFour.property); // "Method Four"



// تكليف 3


let a = 1;

let threeNums = {
    b: 2,
    c: 3,
    d: 4,
};

let twoNums = {
    e: 5,
    f: 6,
};

let finalObject = Object.assign({}, [a], threeNums, twoNums)


console.log(finalObject);

// /*
//   a: 1
//   b: 2
//   c: 3
//   d: 4
//   e: 5
//   f: 6
// */



// تكليف 4


// The Object To Work With
let myFavGames = {
    "Trinity Universe": {
        publisher: "NIS America",
        price: 40,
    },
    "Titan Quest": {
        publisher: "THQ",
        bestThree: {
            one: "Immortal Throne",
            two: "Ragnarök",
            three: "Atlantis",
        },
        price: 50,
    },
    YS: {
        publisher: "Falcom",
        bestThree: {
            one: "Oath in Felghana",
            two: "Ark Of Napishtim",
            three: "origin",
        },
        price: 40,
    },
};

// Code One => How To Get Object Length ?
let objectLength = Object.keys(myFavGames).length;
let game = Object.keys(myFavGames);

for (let i = 0; i < objectLength; i++) {
    console.log(`The Game Name Is ${game[i]}`);
    console.log(`The Publisher Is ${myFavGames[game[i]]["publisher"]}`);
    console.log(`The Price Is ${myFavGames[game[i]]["price"]}`);
    if (myFavGames[game[i]]["price"] === 50) {
        console.log("- Game Has Releases");
        console.log(`First => Immortal Throne`);
        console.log(`Second => Ragnarök`);
        console.log(`Third => Atlantis`);
    } else if (myFavGames[game[i]]["publisher"] === "Falcom") {
        console.log("- Game Has Releases");
        console.log(`First => Oath in Felghana`);
        console.log(`Second => Ark Of Napishtim`);
        console.log(`Third => origin`);
    }

    console.log("#".repeat(20));
}
console.log(game)

// Ouput

"The Game Name Is Trinity Universe"
"The Publisher Is NIS America"
"The Price Is 40"
"####################"
"The Game Name Is Titan Quest"
"The Publisher Is THQ"
"The Price Is 50"
"- Game Has Releases"
"First => Immortal Throne"
"Second => Ragnarök"
"Third => Atlantis"
"####################"
"The Game Name Is YS"
"The Publisher Is Falcom"
"The Price Is 40"
"- Game Has Releases"
"First => Oath in Felghana"
"Second => Ark Of Napishtim"
"Third => origin"
"####################"