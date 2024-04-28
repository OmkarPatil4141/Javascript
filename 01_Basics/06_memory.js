//There are two types of memory
//1.Stack => It is allocated to all primitive data types 
//2.Heap  => It is allocated to all non-primitive data types 

//example 1 : Stack -> we get copy of that variable

let str1 = "Omkar@gamil.com";
let str2 = str1;
str2 = "patil@gmail.com";

console.log(str1);
console.log(str2);

console.log("---------------------------------------------------------------");

//example 2 : Heap -> we get reference to that variable

let obj1 = {
    email : "Omkar@gmail.com",
    upi : "omkar4141@ybi"
}

let obj2 = obj1;

obj2.email = "patil@gmail.com";

console.log(obj1.email);
console.log(obj2.email);
