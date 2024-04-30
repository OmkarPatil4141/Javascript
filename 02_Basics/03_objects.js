//Object.create() 
//it creates a singleton object
//Creates a new object with the specified prototype object and properties.


//Objetcs are used to store various keyed collections and more complex entities.

//We can also create a object using literal syntax.

const JsUser = {
    name:"Omkar Patil",
    age: 21,
    location: "Pune",                     //Every key by default considered as a "string"
    email : "Omkar@gmail.com",
    isLoggedIn : false,
    user2 : {}, 
    lastLoginDays : ["Monday", "Wednesday"],
    "wage 2" : 1000000
}

//Access object 
console.log(JsUser.email);

//but what if we have given already a string e.g.wage
//we cant access by console.log(JsUser.wage 2) or console.log(JsUser."wage 2") 

// console.log(JsUser.wage 2);
// console.log(JsUser."wage 2");

console.log(JsUser["wage 2"]);

//Add a symbol to your object also we cannot add it directly
//we have to use [] here also

const sym = Symbol('Key')

const JsUser2 = {
    name:"Omkar Patil",
    age: 21,
    location: "Pune",                     //Every key by default considered as a "string"
    email : "Omkar@gmail.com",
    isLoggedIn : false,
    user2 : {}, 
    lastLoginDays : ["Monday", "Wednesday"],
    "wage 2" : 1000000,
    // sym : "mykey1",                      it will add without error but typeof sym is string
    [sym] : "Mykey1",
}

console.log(JsUser2);


// we can also freez our object means we cannot change the value in our object

Object.freeze(JsUser2);

JsUser.greeting = function()
{
    console.log("Hello JsUser");
}

JsUser.greeting1 = function()
{
    console.log(`Hello JsUser ${this.name}`);
}

console.log(JsUser.greeting);
console.log(JsUser.greeting1);




