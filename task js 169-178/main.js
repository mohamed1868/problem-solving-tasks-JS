// // التكليف 1

// عمل ملف json


// التكليف 2




// let m = new XMLHttpRequest();
// m.open("Get", "articles.json")
// m.send()
// m.onreadystatechange = function() {

//     console.log(m.responseText)
//     if (m.readyState === 4 && m.status === 200) {
//         console.log("JSON Object Content Here")
//     }
// }




// // التكليف 3

// let m = new XMLHttpRequest();
// m.open("Get", "articles.json")
// m.send()
// m.onreadystatechange = function() {


//     if (m.readyState === 4 && m.status === 200) {
//         let data = m.responseText
//         let s = JSON.parse(data)
//         for (let i = 0; i < s.length; i++) {
//             s[i]["category"] = "All"
//         }
//         console.log(s)
//         let jo = JSON.stringify(s)
//         console.log(jo)

//     }
// }






// // التكليف 4


// let m = new XMLHttpRequest();
// m.open("Get", "articles.json")
// m.send()
// m.onreadystatechange = function() {


//     if (m.readyState === 4 && m.status === 200) {
//         let data = m.responseText
//         let s = JSON.parse(data)
//         for (let i = 0; i < s.length; i++) {
//             s[i]["category"] = "All"


//             let div1 = document.createElement("div")
//             let att = document.createAttribute("id")
//             div1.setAttributeNode(att)
//             div1.setAttribute("id", "Data")
//             let div2 = document.createElement("div")
//             div1.append(div2)
//             div2.innerHTML = `<h2>${s[i]["title"]}</h2>
//             <p>${s[i]["author"]}</p>
//             <p>${s[i]["body"]}</p>
//             <p>${s[i]["category"]}</p>`
//             document.body.append(div1)
//         }
//         console.log(s)




//     }

// }