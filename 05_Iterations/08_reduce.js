//reduce


const numbers = [1,2,3];
let start = 0; //we are telling accumalator that start from start

let Mytotal  = numbers.reduce((acc,curr) =>{
    console.log(`Accumalator ${acc} and Current${curr}`);
    return acc+curr
},start)

console.log(Mytotal);


Mytotal = numbers.reduce((acc,curr)=> acc+curr,0)
console.log(Mytotal);



//////////////////////////////////////////////////////////////////////////////

const courses = [
    {courseName : "Js Course", price:2999},
    {courseName : "Python Course", price:5999},
    {courseName : "Andoid dev Course", price:6999},
    {courseName : "Angular Course", price:19999},
]


Mytotal = courses.reduce((acc,curr)=>acc+curr.price,0)
console.log(`Total prices of all courses is ${Mytotal}`);

