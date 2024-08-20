// اختبار فيديو 146+ التكليف 6


// let url1 = 'elzero.org';
// let url2 = 'http://elzero.org';
// let url3 = 'https://elzero.org';
// let url4 = 'https://www.elzero.org';
// let url5 = 'https://www.elzero.org:8080/articles.php?id=100&cat=topics';

// let re = /(https?:\/\/)?(www.)?elzero.org(:8080\/articles.php\?id=100&cat=topics)?/ig;

// console.log(url1.match(re));
// console.log(url2.match(re));
// console.log(url3.match(re));
// console.log(url4.match(re));
// console.log(url5.match(re));


// // تكليف 1


// let ip = "2001:db8:3333:4444:5555:6666:7777:8888";

// let r = /\d{4}:\w{2}\d:\d{4}:\d{4}:\d{4}:\d{4}:\d{4}:\d{4}/ig
// console.log(ip.match(r))



// تكليف 2



// let specialNames = "Os10O OsO Os100O Osa100O Os1000 Os100m";

// let r = /os\d*o/ig;
// console.log(specialNames.match(r))

// تكليف 3


// let phone = "+(995)-123 (4567)";

// let r = /.\(\d{3}\).\d{3}\s\(\d{4}\)/ig
// console.log(phone.match(r))


// تكليف 4


// let re = /https?:\/\/(?:[-\w]+\.)?([-\w]+)\.\w+(?:\.\w+)?\/?.*/i;

// شرح الكود بيعمل ايه



// // تكليف 5

// let date1 = "25/10/1982";
// let date2 = "25 - 10 - 1982";
// let date3 = "25 10 1982";
// let date4 = "25 10 82";

// let re = /\d{2}(\/|\s.\s|\s)?\d{2}(\/|\s.\s|\s)?\d{2,4}/ig;

// console.log(date1.match(re)); // "25/10/1982"
// console.log(date2.match(re)); // "25 - 10 - 1982"
// console.log(date3.match(re)); // "25 10 1982"
// console.log(date4.match(re)); // "25 10 82"