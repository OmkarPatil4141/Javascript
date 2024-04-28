const strPrim = "foo"; // A literal is a string primitive
const strPrim2 = String(1); // Coerced into the string primitive "1"
const strPrim3 = String(true); // Coerced into the string primitive "true"
const strObj = new String(strPrim); // String with new returns a string wrapper object.

console.log(strPrim); 
console.log(strPrim2);
console.log(strPrim3); 
console.log(strObj);

console.log(typeof strPrim); // "string"
console.log(typeof strPrim2); // "string"
console.log(typeof strPrim3); // "string"
console.log(typeof strObj); // "object"




// Template String provide an easy way to interpolate variables and expressions into strings.

let Name = "Omkar"
let age = 20

console.log(`My name is ${Name} and my age is ${age} my age after 5 years is ${age+5}`);


//when we declare string with new keyword

let Newstring = new String("Omkar"); //it is considered as object 
/*
    key value pair 
        0: "O"
        1: "m"
        2: "k"
        3: "a"
        4: "r"
        length: 5
        [[Prototype]]: String
        [[PrimitiveValue]]: "Omkar"
*/


//we got prototype which consist all inbuilt methods supported by String

//we can access prototype by

console.log(Newstring.__proto__); //we got object

//some methods from proto 
// there is no change in actual string #primitive
console.log(Newstring.length);

console.log(Newstring.toLowerCase())
console.log(Newstring.toUpperCase())
console.log(Newstring)// there is no change in actual string #primitive

console.log(Newstring.charAt(4));
console.log(Newstring.indexOf('r'));



let substring = Newstring.substring(0,4); //excluding 4 means excluding second paramenter
console.log(substring);

let slice = Newstring.slice(0,4); //excluding 4 means excluding second paramenter
console.log(slice);

let negativeslice = Newstring.slice(-5,-1); //excluding 4 means excluding second paramenter
console.log(negativeslice);

let Newstring1 = "      omkar       "
let trim = Newstring1.trim()
console.log(trim)
console.log(trim.length)



let url = "www.omkar-patil.com"
console.log(url);
console.log(url.replace('-',"//")); //replace -by //
console.log(url); //No cahnge as primitive

console.log(url.includes('www'));


