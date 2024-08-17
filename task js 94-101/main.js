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



let addField = document.querySelector(".classes-to-add");
let delField = document.querySelector(".classes-to-remove");
let classesContainer = document.querySelector(".classes-list div");


addField.addEventListener("blur" , function(){
  let calssnew = addField.value.trim().toLowerCase().split(" ");

 
     calssnew.forEach((ele) => addField.classList.add(ele));
     add(addField.classList)
     addField.value= ""  ;


})
delField.addEventListener("blur" , function(){
  let newclass = delField.value.trim().toLowerCase().split(" ")
    newclass.forEach((ele) => addField.classList.remove(ele))

    delField.value= ""

})


function add (ele){
  addField.classList.remove("classes-to-add")
  classesContainer.innerHTML =""
  for(let i = 0 ; i<ele.length ; i++){
         let spann=  document.createElement("span")
         spann.textContent = ele[i]
         classesContainer.append(spann) 
  }
}

// function add (ele){
//   let now = Array.from(ele).sort()
//   classesContainer.innerHTML =""
//   now.forEach((el) =>{
//       if(el != "classes-to-add"){
//   let spann=  document.createElement("span")
//    spann.textContent = el
//    classesContainer.append(spann)
//   }
//   } )

// }
if(addField.value==""){
  classesContainer.textContent =`no class`
}






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



document.addEventListener("click", function(event) {

      console.log(`This is a ${event.target.localName}`);
  
});







