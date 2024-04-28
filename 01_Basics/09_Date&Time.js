/// Dates

let mydate = new Date() //object

console.log(mydate) //2024-04-28T07:18:57.834Z
console.log(mydate.toString()) // Sun Apr 28 2024 12:48:57 GMT+0530 (India Standard Time)
console.log(mydate.toDateString()) //Sun Apr 28 2024
console.log(mydate.toJSON())// 2024-04-28T07:18:57.834Z
console.log(mydate.toLocaleString()) // 28/4/2024, 12:48:57 pm
console.log(mydate.toLocaleDateString()) //28/4/2024

//Create own date 1.
let myCreatedDate = new Date(2023,0,23,5,3) //monnth starts from 0 in js
console.log(myCreatedDate.toLocaleString()); //23/1/2023, 5:03:00 am

//Create own date2.
let myCreatedDate1 = new Date("2023-01-14")
console.log(myCreatedDate1.toLocaleString());


//Create own date 3.
let myCreatedDate2 = new Date("01-14-2023")
console.log(myCreatedDate2.toLocaleString());    

//Timestamp
let myTimestamp = Date.now();
console.log(myTimestamp);
console.log(myCreatedDate.getTime());

//second me conversion

console.log(Date.now()/1000); //give in decimal

console.log(Math.floor(Date.now()/1000));