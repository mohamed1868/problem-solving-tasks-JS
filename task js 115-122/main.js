
// تكليف 6 + اختبار فيديو 122

// let chosen = 2;

// let myFriends = [
//   { title: "Osama", age: 39, available: true, skills: ["HTML", "CSS"] },
//   { title: "Ahmed", age: 25, available: false, skills: ["Python", "Django"] },
//   { title: "Sayed", age: 33, available: true, skills: ["PHP", "Laravel"] },
// ];

// // طريقه اخري لي تحويل available

// // if(myFriends[chosen-1].available===true){
// //     myFriends[chosen-1].available = "available"
// // }else{
// //     myFriends[chosen-1].available = "not available"
// // }


// let [{title:name1 , age:age1 , available:available1 , skills : [a , b]},{title:name2 , age:age2 , available:available2 , skills : [c , d]},{title:name3 , age:age3 , available:available3 , skills : [e , f]}] = myFriends

// if( chosen === 1){
//     console.log(name1)
//     console.log(age1)
//     console.log(available1===true ? "available" : "not available")
//     console.log(a ,b)
// }
// if( chosen === 2){
//     console.log(name2)
//     console.log(age2)
//     console.log(available2===true ? "available" : "not available")
//     console.log(c ,d)
// }
// if( chosen === 3){
//     console.log(name3)
//     console.log(age3)
//     console.log(available3===true ? "available" : "not available")
//     console.log(e ,f)
// }


// تكليف 1


// let myNumbers = [1, 2, 3, 4, 5];
// let[a , , , , e] = myNumbers
// console.log(a * e); // 5


// تكليف 2


// let mySkills = ["HTML", "CSS", "JavaScript", ["PHP", "Python", ["Django", "Laravel"]]];
// let [a , b , c , [d,e , [f, g]]]= mySkills
// console.log(`My Skills: ${a}, ${b}, ${c}, ${d}, ${e}, ${f}, ${g}`);

// My Skills: HTML, CSS, JavaScript, PHP, Python, Django, Laravel


// تكليف 3


// let arr1 = ["Ahmed", "Sameh", "Sayed"];
// let arr2 = ["Mohamed", "Gamal", "Amir"];
// let arr3 = ["Haytham", "Shady", "Mahmoud"];

// Play With Arrays To Prepare For Destructuring
// Write Your Destructuring Assignment Here


// let ana =`${arr3[1]}-${arr3[2]}-${arr1[0]}`

// let e  = ana.split("-")
// let[a,b,c]= e

// console.log(`My Best Friends: ${a}, ${b}, ${c}`);

// My Best Friends: Shady, Mahmoud, Ahmed


// تكليف 4


// const member = {
//     age: 30,
//     working: false,
//     country: "Egypt",
//     hobbies: ["Reading", "Swimming", "Programming"],
//   };

//   let{age:a , working:w , country:c , hobbies:[h1 ,  , h3]} = member
  
//   // Write Your Destructuring Assignment Here
  
//   console.log(`My Age Is ${a} And Iam ${w ===true ? "yas" : "Not"} Working`);
//   // My Age Is 30 And Iam Not Working
  
//   console.log(`I Live in ${c}`);
//   // I Live in Egypt
  
//   console.log(`My Hobbies: ${h1} And ${h3}`);
//   // My Hobbies: Reading And Programming


// تكليف 5


const game = {
    title: "YS",
    developer: "Falcom",
    releases: {
      "Oath In Felghana": ["USA", "Japan"],
      "Ark Of Napishtim": {
        US: "20 USD",
        JAP: "10 USD",
      },
      Origin: "30 USD",
    },
  };

 let [o, a] = Object.keys(game.releases)
  
  let {title:t , developer:d , releases:{["Oath In Felghana"]:[u , j],["Ark Of Napishtim"]:{US:u_price , JAP:j_price}  ,Origin:or} }=game

  // Write Your Destructuring Assignment/s Here

  
  console.log(`My Favourite Games Style Is ${t} Style`);
  // My Favourite Games Style Is YS Style
  
  console.log(`And I Love ${d} Games`);
//   // And I Love Falcom Games
  
  console.log(`My Best Release Is ${o} It Released in ${u} & ${j}`);
//   // My Best Release Is Oath In Felghana It Released in USA & Japan
  
  console.log(`Although I Love ${a}`);
//   // Although I Love Ark Of Napishtim
  
  console.log(`${a} Price in USA Is ${u_price}`);
//   // Ark Of Napishtim Price in USA Is 20 USD
  
  console.log(`${a} Price in Japan Is ${j_price}`);
//   // Ark Of Napishtim Price in Japan Is 10 USD
  
  console.log(`Origin Price Is ${or}`);
  // Origin Price Is 30 USD