// تكليف 1


// console.log(document.querySelector("div"))
// console.log(document.querySelector("#elzero"))
// console.log(document.querySelector(".element"))
// console.log(document.querySelectorAll("div"))
// console.log(document.querySelectorAll("#elzero"))
// console.log(document.querySelectorAll(".element"))
// console.log(document.getElementsByClassName("element"))
// console.log(document.getElementById("elzero"))
// console.log(document.getElementsByTagName("div"))
// console.log(document.getElementsByTagName("div")[0])
// console.log(document.querySelectorAll(".element")[0])
// console.log(document.querySelectorAll("div")[0])



// تكليف 2


// let d = document.images

// for (let i = 0; i < d.length; i++) {
//     let m = document.querySelectorAll("img")[i]
//     m.setAttribute("src", "https://elzero.org/wp-content/themes/elzero/imgs/logo.png")
//     m.setAttribute("alt", "Elzero Logo")
//     console.log(m)
// }



// تكليف 3

// let mo = document.querySelector("input")
// let mom = document.querySelector("div")

// mo.oninput = function() {
//     mom.innerHTML = `${mo.value} USD Dollar = ${(mo.value *15.6).toFixed(2)}Egyptian Pound`
// }



// تكليف 4



// let d = document.getElementsByTagName("div")[0]
// let m = document.getElementsByTagName("div")[1]
// let o = m.getAttribute("title")
// let s = d.getAttribute("title")
// let q = m.innerText
// let p = d.innerText

// d.setAttribute("title", `${o}`)
// m.setAttribute("title", `${s}`)

// d.innerText = `${q}`
// m.innerText = `${p} 2`



//تكليف 5


// let i = document.querySelectorAll("img")


// for (let d = 0; d < i.length; d++) {
//     if (i[d].hasAttribute('alt') === true) {
//         i[d].alt = "old"
//     } else {
//         i[d].alt = "Elzero New"
//     }

// }


//تكليف 6


let form = document.querySelector("form")
let q = document.querySelectorAll("input")[0]
let w = document.querySelectorAll("input")[1]
let e = document.querySelector("select")
let r = document.querySelector("div")

document.forms[0].onsubmit = function(ele) {
    let numberValid = false
    let textValid = false
    if (q.value !== "") {
        numberValid = true
    }
    if (w.value !== "") {
        textValid = true
    }
    if (numberValid === false || textValid === false) {
        ele.preventDefault();
    }

}
form.oninput = function() {
    for (let m = 0; m <= q.value; m++) {
        if (e.value == "Div") {
            r.innerHTML = (`<div style="margin: 20px; background-color: #f6f6f6;width: 80px;
                    height: 50px; display: flex; justify-content: center; align-items: center;
                    font-size: 15px;">${w.value}</div>`).repeat(m)
        } else if (e.value == "Section") {
            r.innerHTML = (`<span style="margin: 20px; background-color: #f6f6f6;width: 80px;
                    height: 50px; display: flex; justify-content: center;
                    align-items: center;font-size: 15px;">${w.value}</span>`).repeat(m)
        }
    }



}