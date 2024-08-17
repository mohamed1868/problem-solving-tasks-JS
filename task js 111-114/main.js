// let lis = document.querySelectorAll("ul li");
// let exp = document.querySelector(".experiment");

// if (window.localStorage.color) {
//     exp.style.backgroundColor = window.localStorage.color
//     lis.forEach((el) => el.classList.remove("active"))
//     document.querySelector(`[data-color=${window.localStorage.color}]`).classList.add("active")
// }

// lis.forEach((ele) => {
//     ele.addEventListener("click", (e) => {
//         lis.forEach((o) => {
//             o.classList.remove("active")
//         })
//         e.target.classList.add("active")
//         window.localStorage.setItem("color", `${e.target.dataset.color}`)
//         exp.style.backgroundColor = e.target.dataset.color
//     })
// })



// اختبار فيديو 114



// let formss = document.querySelector("form")
// let a = document.querySelector(".input")
// let b = document.querySelector(".add")
// let c = document.querySelector(".task")


// formss.onclick = function(ele) {
//     let text = false
//     if (a.value !== "") {
//         text = true
//     }
//     if (text === false) {
//         ele.preventDefault()
//     }
// }

// b.onclick = function() {
//     if (a.value != "") {

//         let div = document.createElement("div")
//         let p = document.createElement("p")
//         let inputl = document.createElement("button")
//         let m1 = document.createAttribute("id")
//         let m2 = document.createAttribute("title")
//         div.setAttributeNode(m1)
//         div.setAttributeNode(m2)
//         div.setAttribute("id", "i")
//         div.setAttribute("title", "number 1")
//         div.append(p)
//         div.append(inputl)
//         p.append(a.value)
//         inputl.append(`deleat`)
//         c.append(div)

//         a.value = ""

//         window.localStorage.data = div.attributes

//         inputl.onclick = function() {
//             div.remove()
//         }
//     }


// }


// تكليف 1

// let box1 = document.querySelector(".select-box-one select")
// let box2 = document.querySelector(".select-box-two select")
// let box3 = document.querySelector(".select-box-Three select")
// let text = document.querySelectorAll("p")

// if (window.localStorage.font) {
//     document.body.style.fontFamily = window.localStorage.font
//     box1.value = window.localStorage.font
// }
// if (window.localStorage.color) {
//     document.body.style.background = window.localStorage.color
//     box2.value = window.localStorage.color
// }
// if (window.localStorage.size) {
//     document.body.style.fontSize = window.localStorage.size
//     box3.value = window.localStorage.size
// }

// box1.onchange = function() {
//     window.localStorage.font = box1.value
//     document.body.style.fontFamily = box1.value
// }
// box2.onchange = function() {
//     window.localStorage.color = box2.value
//     document.body.style.background = box2.value
// }
// box3.onchange = function() {
//     window.localStorage.size = box3.value
//     document.body.style.fontSize = box3.value
// }



let t = document.querySelectorAll("input")[0]
let p = document.querySelectorAll("input")[1]
let m = document.querySelectorAll("input")[2]
let s = document.querySelector("select")


window.onload = function() {
    if (window.sessionStorage.text) {
        t.value = window.sessionStorage.text
    }
    if (window.sessionStorage.passowed) {
        p.value = window.sessionStorage.passowed
    }
    if (window.sessionStorage.mail) {
        m.value = window.sessionStorage.mail
    }

    if (window.sessionStorage.skill) {
        s.value = window.sessionStorage.skill
    }





}

t.oninput = function() {
    window.sessionStorage.text = t.value

}
p.oninput = function() {
    window.sessionStorage.passowed = p.value

}
m.oninput = function() {
    window.sessionStorage.mail = m.value

}
s.onchange = function() {
    window.sessionStorage.skill = s.value

}