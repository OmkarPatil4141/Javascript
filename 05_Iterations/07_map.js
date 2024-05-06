// .map()return array  of same size

const numbers = [1,2,3,4,5,6,7,8,9,10];

let changedNumbers = numbers.map((num)=>{
    return num+10
})

console.log(changedNumbers);


//////////////////////////////////////////
//chaining

changedNumbers = numbers.map((num) => num * 10).map((num)=> num+1)  //output of first map vr operations of 
console.log(changedNumbers);                                        //second map and then stored

changedNumbers = numbers.map((num) => num * 10).map((num)=> num+1).filter((num)=> num%2 == 1 && num != 101)
console.log(changedNumbers); 