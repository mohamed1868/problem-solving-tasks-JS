// التكليف 1


// function data(api) {
//     return new Promise((resolve, reject) => {
//         let ajax = new XMLHttpRequest();
//         ajax.onload = function() {
//             if (this.readyState === 4 && this.status === 200) {
//                 resolve(JSON.parse(this.responseText))
//             } else {
//                 reject(Error("no api"))
//             }

//         }
//         ajax.open("Get", api)
//         ajax.send()
//     })
// }
// data("test.json").then(
//     (res) => {

//         for (let i = 0; i < 5; i++) {
//             let d = document.createElement("div")
//             let h = document.createElement("h3")
//             let p = document.createElement("p")
//             h.append(res[i]["title"])
//             p.append(res[i]["description"])
//             d.append(h)
//             d.append(p)
//             document.body.append(d)
//         }
//     }
// 






// التكليف 2



// fetch("test.json").then(
//     (res) => {
//         let data = res.json()
//         return data

//     }).then((res => {

//     for (let i = 0; i < 5; i++) {
//         let d = document.createElement("div")
//         let h = document.createElement("h3")
//         let p = document.createElement("p")
//         h.append(res[i]["title"])
//         p.append(res[i]["description"])
//         d.append(h)
//         d.append(p)
//         document.body.append(d)
//     }

// }))