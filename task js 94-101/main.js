// اختبار فيديو 101


// let header = document.createElement("div")
// let div = document.createElement("div")
// let h1 = document.createElement("h1")
// let ul = document.createElement("ul")
// let li = document.createElement("li")
// let li1 = document.createElement("li")
// let li2 = document.createElement("li")
// let li3 = document.createElement("li")
// let text = document.createTextNode("Mohamed")
// let text1 = document.createTextNode("Home")
// let text2 = document.createTextNode("About")
// let text3 = document.createTextNode("Service")
// let text4 = document.createTextNode("Content")

// header.className = "header"
// div.className = "contianer"

// h1.appendChild(text)
// li.appendChild(text1)
// li1.appendChild(text2)
// li2.appendChild(text3)
// li3.appendChild(text4)

// ul.appendChild(li)
// ul.appendChild(li1)
// ul.appendChild(li2)
// ul.appendChild(li3)
// div.appendChild(h1)
// div.appendChild(ul)
// header.appendChild(div)

// document.body.appendChild(header)

// header.style.cssText = ("margin-left : 20px ; margin-top : 20px ; height: 70px")
// div.style.cssText = ("display: flex;justify-content: space-between")
// h1.style.cssText = ("color: green ; margin-left : 50px")
// ul.style.cssText = ("display: flex;justify-content: space-between;list-style: none; ")
// li.style.cssText = ("margin-right: 60px;color: #777;")
// li1.style.cssText = ("margin-right: 60px;color: #777;")
// li2.style.cssText = ("margin-right: 60px;color: #777;")
// li3.style.cssText = ("margin-right: 60px;color: #777;;")


// let content = document.createElement("div")
// document.body.appendChild(content)

// for(let i = 1 ; i <=15 ; i++){
    
// let so = document.createElement("div")
// let textt = document.createElement("p")
// let textt1 = document.createTextNode("product")
// let number = document.createElement("p")
// let number1 = document.createTextNode(i)

// number.appendChild(number1)
// textt.appendChild(textt1)
// so.appendChild(number)
// so.appendChild(textt)
// content.appendChild(so)

// so.style.cssText = "background-color: #777 ; margin:20px ; width: 200px;height: 110px;display: flex;justify-content:center ;align-items: center ; flex-direction: column;"
   
// }
// content.style.cssText = ("display: grid;grid-template-columns:350px 350px 350px;padding-left : 200px ")


// let footer = document.createElement("div")
// let po = document.createElement("h3")
// let to = document.createTextNode("Hello <3 Mohamed")
// po.append(to)
// footer.append(po)
// document.body.append(footer)
// footer.style.cssText = "background-color: green ; height: 70px ;display: flex;justify-content:center ;align-items: center; margin-top : 50px"



// تكليف 1

// window.addEventListener("load" , function(){
// let ana = document.links[1]  
// ana.click()

// })  



// تكليف 2



// let add = document.querySelector(".classes-to-add");
// let remove = document.querySelector(".classes-to-remove");
// let current = document.querySelector("[title = 'Current']");
// let cls = document.querySelector(".classes-list div");

// function addOrRemove(){
//     // remove all elements at the start
//     document.querySelectorAll("span").forEach(el => el.remove());
    
//     // add and remove classes
//     for (let i = 0; i < this.value.trim().split(" ").length; i++){
//         if (add.value)
//             current.classList.add(add.value.toLowerCase().trim().split(" ")[i]);
        
//         if (remove.value)
        
//             current.classList.remove(remove.value.toLowerCase().trim().split(" ")[i]);
//     }
//     this.value = "";

//     // add and remove spans
//     if(current.classList.length){
//         [...current.classList].sort().forEach(el => {
//             let clSpan = document.createElement("span");
//             clSpan.textContent = el;
//             cls.append(clSpan);
//         });
//     }else cls.textContent = "No Classes To Show";
// }

// add.onblur = addOrRemove;
// remove.onblur = addOrRemove;



// تكليف 3



// let pr = document.querySelector("p")
// let di = document.querySelector(".our-element")
// let dib = document.createElement("div")
// let dia = document.createElement("div")
// let text1 = document.createTextNode("start")
// let text2 = document.createTextNode("end")
// dib.append(text1)
// dia.append(text2)

// dib.className = "one"
// dia.className = "two"
// dib.title="Start Element"
// dia.title="End Element"

// di.before(dib)
// di.after(dia)
// pr.remove()


// تكليف 4

// let mo =document.querySelector("div")
// let m =mo.childNodes[4]


// console.log(m)


// تكليف 5

let m1 = document.querySelector("div")
let m2 = document.querySelector("span")
let m3 = document.querySelector("p")
let m4 = document.querySelector("article")
let m5 = document.querySelector("section")

// document.addEventListener("click" , function(ele){
//     if(ele.target){
//         console.log(`this is ${ele.localName}`)
//     }
// })

m1.onclick = function(){
    console.log(`this is ${this.localName}`)
}
m2.onclick = function(){
    console.log(`this is ${this.localName}`)
}
m3.onclick = function(){
    console.log(`this is ${this.localName}`)
}
m4.onclick = function(){
    console.log(`this is ${this.localName}`)
}
m5.onclick = function(){
    console.log(`this is ${this.localName}`)
}






