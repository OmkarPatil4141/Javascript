
const arr1 = [1,2,3,4,5,6];
const arr2 = ["omkar", "akash", "saurabh", "pratik"]

arr1.push(arr2)
console.log((arr1));

const arr3 = [1,4,6,9,2,0]
const arr4 = ["vaibhs", "ronny", "jay", "appa"]

arr3.concat(arr4)
console.log(arr3);

//concat ,spread , flat, isArray .from,     

console.log(Array.from({name:"Omkar"})) //it will return an empty array (interesting case as we have to mention make array of keys or values)