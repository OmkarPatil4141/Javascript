const tinderUser = {};

tinderUser.id = "1234abc"
tinderUser.name = "Ommiii"
tinderUser.isLoggedIn = false

console.log(tinderUser);

const regularUser = {

    email : "omkar@gamil.com",

    name :{
        userFullName :{
            firstName :"Omkar",
            lastName :"Patil"
        }
    }
}

console.log(regularUser.name.userFullName.firstName);

//what if name is not exist (we use optional chaining) ?-> if we not use ? then we have to use if else
// console.log(regularUser.name?.userFullName.firstName);

//combining objects

const obj1 = {1:"a",2:"b"}
const obj2 = {3:"a",4:"b"}

const obj3 = {obj1, obj2} //same problem like arr1.push(arr2)
console.log(obj3);

const obj4 = {1:"a",2:"b"}
const obj5 = {3:"a",4:"b"}
const target = {}
const obj6 = Object.assign(target,obj4,obj5); //empty array is target means all merged arrays are in that
console.log(obj6);
console.log(obj6 == target);


const obj7 = {1:"a",2:"b"}
const obj8 = {3:"a",4:"b"}


const obj9 = {...obj7, ...obj8}
console.log(obj9);


//Array of objects

const users = [

    {
        id:1
    },
    {
        id:2

    },
    {
        id:3
    },
    {
        id:4
    }
]


console.log(users[0].id);


// Object.keys(objectname)  Object.values(objectname)
//this two will return arrays af keys and values respectively

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));

//Object.entries(objectname)
//array of each entry (key value) in another array
console.log(Object.entries(tinderUser));


//like includes on array we can check value exist in object or not

console.log(tinderUser.hasOwnProperty('isLoggedIn'));