/*
    Data types are mainly divide into 2 parts 1.primitive and 2. Non-Primitive

    1.Primitive (call by value)
    7 types :- String , Number , Boolean, null, undefined , Symbol, BigInt
*/

//symbol

const id = Symbol('123');
const anotherId = Symbol('123');

console.log(id == anotherId); //false (symbol is used to keep unique)


const nignumber = 456789098765n; //bigInt (typeof )==> undefined

const a = null; //null (typeof )==> object
    
/*
    2.reference type (Non pimitive)  (call by refernce)

    //Arrays, objects, Functions

*/


const heroes = ["shaktiman","nagraj","doga"];

let obj = {
    name : "omkar",
    age : 20,
}



const myfunction = function(){   // typeof  ==> function (but bject function)
   console.log("moraya");
}
