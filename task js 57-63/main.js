// اختبار فيديو 63


function showDetails( username , ag , tf ){
  let name = "" ;
  let age = 0;
  let  tr = "";
    
  if (typeof username === "string"){
    name = username
  }else if(typeof username === "number"){
    age = username
  }else{
    tr = username
  }
  if (typeof ag === "string"){
    name = ag
  }else if(typeof ag === "number"){
    age = ag
  }else{
    tr = ag
  }
  if (typeof tf === "string"){
    name = tf
  }else if(typeof tf === "number"){
    age = tf
  }else{
    tr = tf
  }

    
  
    if ( tf === "true"){
         tr =` , You Are Available For Hire`
   }else{
   tr =` , You Are Not Available For Hire`
   }
document.write(`<div>`)
   document.write( `Hello ${name}, Your Age Is ${age}, ${tr}`)
   document.write(`</div>`)
   }

showDetails("Osama", 38 , false); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
 showDetails(38, "Osama", true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
 showDetails(true, 38, "Osama"); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
showDetails(false, "Osama", 38); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"



// تكليف 1



function sayHello(theName, theGender="") {
    if(theGender === "Male"){
        document.write(`<div>`)
        document.write(`Hello Mr ${theName}`)
        document.write(`</div>`)
    }else if (theGender === "Female"){
        document.write(`<div>`)
        document.write(`Hello Miss ${theName}`)
        document.write(`</div>`)
    }
    else{
        document.write(`<div>`)
        document.write(`Hello ${theGender} ${theName}`)
        document.write(`</div>`)
    }
  }
  
  // Needed Output
  sayHello("Osama", "Male"); // "Hello Mr Osama"
  sayHello("Eman", "Female"); // "Hello Miss Eman"
  sayHello("Sameh" ); // "Hello Sameh"


//   تكليف 2



function calculate(firstNum, secondNum="NaN", operation="undefined") {
    if(secondNum === "NaN" ){
        console.log(`Second Number Not Found`)
    }
    if(operation === "undefined"){
        return firstNum + secondNum
    }
    if(operation === "add"){
        
        return firstNum + secondNum
    }
    if(operation === "subtract"){
        
        return firstNum - secondNum
    }
    if(operation === "multiply"){
        
        return firstNum * secondNum
    }
  }
  
  // Needed Output
  calculate(20); // Second Number Not Found
  document.write(`<div>`)
  document.write(calculate(20, 30)) ; // 50
  document.write(`</div>`)
  document.write(`<div>`)
  document.write( calculate(20, 30, 'add')); // 50
  document.write(`</div>`)
  document.write(`<div>`)
  document.write( calculate(20, 30, 'subtract')); // -10
  document.write(`</div>`)
  document.write(`<div>`)
  document.write( calculate(20, 30, 'multiply')); // 600
  document.write(`</div>`)



//   تكليف 3



function ageInTime(theAge) {
    if(theAge < 100){
    console.log(`Month: ${theAge*12} - week: ${theAge * 12 *4} - day: ${theAge * 12 *4 *7} `)
    }else{
        console.log(`Age Out Of Range`)
    }
  }
  
  // Needed Output
  ageInTime(110); // Age Out Of Range
  ageInTime(38); // Months Example => 456 Months
  

//   تكليف 4



//   نفس الاختبار



//   تكليف 5


function createSelectBox(startYear, endYear) {
     document.write(`<select>`)
    for(let i = startYear ; i <= endYear; i++){
   
        document.write(`<option value=i>${i}</option>`)
     
    }
   document.write(`</select>`)
  }
  createSelectBox(2000, 2021);


//   تكليف 6

function multiply(...num){
    let resert = 0  ;
    for(let i = 0 ; i < num.length ; i++){
        if(typeof num[i] === "number")
        resert =Math.floor (num[i-1]) * Math.floor(num[i])
    }
    console.log(resert )
}


 multiply(10, 20); // 200
 multiply("A", 10, 30); // 300
multiply(100.5, 10, "B"); // 1000