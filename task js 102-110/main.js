// تكليف1  

// let m = prompt("Print Number From – To", "Example: 5-20")
// let d = m.split("-").sort((a, b) => a - b)

// for (let i = +d[0]; i <= d[1]; i++) {

//     document.body.append(` ${i} `)

// }


// تكليف2 

// function mo() {
//     let s = document.createElement("div")
//     let sp = document.createElement("div")
//     let sp1 = document.createElement("p")
//     let text = document.createTextNode("Welcome")
//     let text1 = document.createTextNode("Welcome ass so mo ana")
//     let b = document.createElement("button")
//     sp.append(text)
//     sp1.append(text1)
//     s.append(sp)
//     s.append(sp1)
//     s.append(b)

//     s.style.cssText = "margin-left: 600px;margin-top: 300px; width: 350px;height: 120px;background-color: #ececec;border-radius: 5px;"
//     sp.style.cssText = "text-align: center;margin-top: 25px"
//     sp1.style.cssText = "text-align: center;margin-top: 25px"
//     b.style.cssText = "text-align: center;margin-top: 25px ; background-color:red;width: 25px;height: 10px ; margin-left: 160px "

//     document.body.append(s)
//     if (b.onclick = function() {
//             s.remove()
//         });
// }

// setTimeout(mo, 5000);



let div1 = document.querySelector("div")

// تكليف3 


// function mo() {
//     div1.innerHTML -= 1
//     if (div1.innerHTML === "0") {
//         clearInterval(mom)
//     }
// }

// تكليف4 


// function mo() {
//     div1.innerHTML -= 1
//     if (div1.innerHTML === "0") {
//         location.href = "https://elzero.org/javascript-bootcamp-assignments-lesson-from-102-to-110/"
//     }
// }


// تكليف5 



// function mo() {
//     div1.innerHTML -= 1
//     if (div1.innerHTML === "0") {
//         clearInterval(mom)
//     }
//     if (div1.innerHTML === "5") {
//         window.open("https://elzero.org/javascript-bootcamp-assignments-lesson-from-102-to-110/", "", "width:500;height:300")
//     }

// }

let mom = setInterval(mo, 1000);