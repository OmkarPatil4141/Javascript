// for of loop

//["","",""]
//[{},{},{}]

//we can apply for of loop on arrays object strings map
const arr = [1,2,3,4,5]

for (const val of arr) {
    console.log(val);
}

const greetings  = "Jay Ganesh❤️"

for (const greet of greetings) {
    console.log(greet);
}

///////////////////////////////////////////////////////////////////////////////////////////////////////

//Map in javascript

/*
  1)The Map object holds key-value pairs and remembers the original insertion order of the keys.

  2)Map objects are collections of key-value pairs. A key in the Map may only occur once; 
  it is unique in the Map's collection. 



  Object Vs Map

  Map                                                                   OBJECT
  
  ✅A Map does not contain any keys by default.            ✅An Object has a prototype, o it contains default keys 
     It only contains what is explicitly put into it.      that could collides with your own keys  if you're not careful.                 
 
✅A Map's keys can be any value (including functions,     ✅The keys of an Object must be either a String or a Symbol.
    objects, or any primitive).
 */


const map = new Map()
map.set('IN','India')
map.set('USA','United states of america')
map.set('Fr','France')
map.set('IN','India')//it only keep uniqye keys!!

console.log(map);

for (const key of map) {
    console.log(key);    // it will give [IN , India] for each key
}

for (const [key, value] of map) {         //[key, value]  destructuring of array
    console.log(`Key is ${key} :-> Value is ${value}`)
}

///////////////////////////////////////////////////////////////////////////////////////////////////////
// for of on objects

const Myobject ={
    'Game1' : "BGMI",
    'Game2' : "COD",
    'Game3' : 'Mini Miltia'
}

/*
for (const obj of Myobject) {
    console.log(obj);
}  
                                                Error as MyObject is not iterable

for (const [key,value] of Myobject) {
    console.log(`Key is ${key} :-> Value is ${value}`)
}  



*/


///////////////////////////////////////////////////////////////////////////////////////////////////////