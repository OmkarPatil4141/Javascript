//arrays enables storing a collection of multiple items under a single variable name

/*In JavaScript, arrays aren't primitives but are instead Array objects with the following core characteristics:

    01. JavaScript arrays are resizable and can contain a mix of different data types

    02.JavaScript arrays are not associative arrays and so, array elements cannot be accessed 
    using arbitrary strings as indexes, but must be accessed using nonnegative integers

    03.JavaScript arrays are zero-indexed

    04. JavaScript array-copy operations create shallow copies.
    shallow means (A shallow copy of an object is a copy whose properties share the same references 
    (point to the same underlying values))

*/


//Method 1 to initialize
const myarr = [1,2,3,4,"omkar","akash"]
console.log(myarr);

//Method 2 to initialize

const myarr2 = new Array(1,2,3,4,"omkar","saurabh")
console.log(myarr2);

console.log(myarr2.__proto__);//inbuilt methods

//1.push  appends element at last

myarr2.push("pratik")
console.log(myarr2);


//2.pop removes last element  

myarr2.pop()
console.log(myarr2);

//3.unshift => appends element at begining of list
// it is very heavy operation as it shifts all  the values
const array = new Array(1,2,3,4,5,6)
array.unshift("first position")

console.log(array);

//4. shift => removes element at fisrt position

array.shift()
console.log(array);


//5 . includes => returns true or false

console.log(array.includes(3));
console.log(array.includes(100));


//6. indexof() => returns index if present else -1

console.log(array.indexOf(1));
console.log(array.indexOf(100));


//7. slice => The slice() method of Array instances returns a shallow copy of a portion of an 
              //array into a new array object selected from start to end (end not included)

console.log("A",array)
const slicedArr = array.slice(1,5);
console.log("sliced:-> ",slicedArr);
console.log("After slice main array",array)



//8 splice()  =>The splice() method of Array instances changes the contents of an array by removing or replacing 
               //existing elements and/or adding new elements in place.
const splicedarr = array.splice(1,5)
console.log("spliced:-> ",splicedarr);
console.log("After splice main array",array)

const months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb'); //adding new elements in place.
console.log(months);

//9.  join =>The join() method of Array instances creates and returns a new string by concatenating all of 
            //the elements in this array, separated by commas or a specified separator string. 
            //If the array has only one item, then that item will be returned without using the separator.

 const elements = ['Fire', 'Air', 'Water'];

console.log(elements.join());// Expected output: "Fire,Air,Water"
            
console.log(elements.join('')); // Expected output: "FireAirWater"
            
console.log(elements.join('-'));// Expected output: "Fire-Air-Water"





