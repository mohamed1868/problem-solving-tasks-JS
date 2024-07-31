// الاختبار الاول فيديو 70


let names = (...name) => `String ${ name }  => Done!`;

console.log(names("Osama", "Mohamed", "Ali", "Ibrahim"));
// String [Osama], [Mohamed], [Ali], [Ibrahim] => Done !


// الاختبار الثاني فيديو 70


let myNumbers = [20, 50, 10, 60];

let calc = (one, two, nums) => one + two + nums;

// طلب ثاني

// let calc = function(one, two, nums) {
//     return one + two + nums;
// }

console.log(calc(10, myNumbers[0], myNumbers[1])); // 80



// تكليف 1



function getDetails(zName, zAge, zCountry) {
    function namePattern() {
        if (typeof zName === "string") {
            zName = zName.slice(0, 7)
        }
        return `${zName}`
    }

    function ageWithMessage() {
        return `${zAge}`
    }

    function countryTwoLetters() {
        if (typeof zCountry === "string") {
            zCountry = zCountry.slice(0, 2).toUpperCase();
        }
        return `${zCountry}`

    }

    function fullDetails() {
        return `Hello ${namePattern()}.,Your Age Is ${ageWithMessage()}, You Live In ${countryTwoLetters()} `
    }
    return fullDetails(); // Do Not Edit This
}

console.log(getDetails("Osama Mohamed", "38 Is My Age", "Egypt"));
// Hello Osama M., Your Age Is 38, You Live In EG
console.log(getDetails("Ahmed Ali", "32 Is The Age", "Syria"));
// Hello Ahmed A., Your Age Is 32, You Live In SY


// تكليف 2



let itsMe = () => `Iam A Normal Function`;

console.log(itsMe()); // Iam A Normal Function


let urlCreate = (protocol, web, tld) => `${protocol}://www.${web}.${tld}`

console.log(urlCreate("https", "elzero", "org")); // https://www.elzero.org



// تكليف 3


let checker = (zName) => function(status) {
    return function(salary) {
        return status === "Available" ? `${zName}, My Salary Is ${salary}` : `Iam Not Avaialble`;
    };
};


console.log(checker("Osama")("Available")(4000)); // Osama, My Salary Is 4000
console.log(checker("Ahmed")("Not Available")()); // Iam Not Avaialble




// تكليف 4


function specialMix(...data) {
    // Your Code Here
    let result = 0;
    for (let i = 0; i < data.length; i++) {
        if (isNaN(parseInt(data[i])) === false) {
            result += parseInt(data[i]);
        }
    }
    if (result === 0) {
        return `All Is Strings`;
    }
    return result;
}

console.log(specialMix(10, 20, 30)); // 60
console.log(specialMix("10Test", "Testing", "20Cool")); // 30
console.log(specialMix("Testing", "10Testing", "40Cool")); // 50
console.log(specialMix("Test", "Cool", "Test")); // All Is Strings