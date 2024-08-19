// تكليف 8 + اختبار فيديو 133

// let n1 = [10, 30, 10, 20];
// let n2 = [30, 20, 10];

// let [a, b, c] = n2
// console.log(c + b * c); // 210


// تكليف 1


// let setOfNumbers = new Set([10])
// let f = setOfNumbers.add(20).add(setOfNumbers.size)
// let num = Array.from(f)[2]
// console.log(f)
// console.log(num)


// تكليف 2


// let myFriends = ["Osama", "Ahmed", "Sayed", "Sayed", "Mahmoud", "Osama"];

// let sett = new Set(myFriends)
// console.log(Array.from(sett).sort())

// Needed Output
// (4)['Ahmed', 'Mahmoud', 'Osama', 'Sayed']



// تكليف 3


// let myInfo = {
//     username: "Osama",
//     role: "Admin",
//     country: "Egypt",
// };

// let ma = new Map([
//     ["username", "Osama"],
//     ["role", "Admin"],
//     ["country", "Egypt"],
// ])
// console.log(ma)
// console.log(ma.size)
// console.log(ma.has("role"))


// Needed Output
//   Map(3) {'username' => 'Osama', 'role' => 'Admin', 'country' => 'Egypt'}
//   3
//   true


// // تكليف 4


// let theNumber = 100020003000;

// let s = theNumber.toString()
// let m = new Set(s)
// let w = m.delete("0")
// let r = [...m]
// console.log(parseInt(r.join(``)))

// // Needed Output
// // 123



// تكليف 5



// let theName = "Elzero";

// console.log([...theName])
// console.log(theName.split(""))
// console.log(new Set(theName))
// console.log(Array.from(theName))
// console.log(theName.split("").copyWithin(0))

// Needed Output
// ['E', 'l', 'z', 'e', 'r', 'o']



// // تكليف 6


// // let chars = ["A", "B", "C", "D", "E", 10, 15, 6];
// // let chars = ["Z", "Y", "A", "D", "E", 10, 1];
// // let chars = ["A", "B", "C", 20, "D", "E", 10, 15, 6];
// // let chars = [10, 15, 6, "A", "B", "C", "D", "E"];
// let chars = [10, 15, 6, "A", "B", "C", "D", "E"];


// let ss = chars.filter((ele) => typeof ele === "string")
// let n = [1]
// let ww = [...ss, ...n]
// let s = chars.filter((ele) => typeof ele === "number")
// let m = ww.map((el) => typeof el === "number" ? "" : el)
// m.forEach((ele) => ele === "" ? m.unshift(...ss.slice(0, s.length)) : ele)
// let qq = m.filter((el) => el !== "")
// console.log(qq)


// // Needed Output
// // ['A', 'B', 'C', 'A', 'B', 'C', 'D', 'E']
// // ["Z", "Y", "Z", "Y", "A", "D", "E"]
// // ['A', 'B', 'C', 'D', 'A', 'B', 'C', 'D', 'E']



// // تكليف 7


// let numsOne = [1, 2, 3];
// let numsTwo = [4, 5, 6];

// console.log(numsOne.concat(numsTwo))
// console.log([...numsOne, ...numsTwo])
// console.log(new Set(numsOne).add(numsTwo[0]).add(numsTwo[1]).add(numsTwo[2]))

// // Needed Output
// // [1, 2, 3, 4, 5, 6]