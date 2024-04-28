
let score = 400; 

let newScore = new Number(100) //using Number constructor

console.log(newScore.toString().length);

console.log(newScore.toFixed(2)); //100 -> 100.00 (2)

const otherNo = 23.8966;
const otherNo1 = 123.8966;
const otherNo2 = 1123.8966;
//returns a string
console.log(otherNo.toPrecision(3)); //it considers decimal, as no 3digits before decimal only round off 
console.log(otherNo1.toPrecision(3)) //now it will convet to 123.8966 to 124
console.log(otherNo2.toPrecision(3));//precise for 3 other exponential



const hundreds = 1000000
console.log(hundreds.toLocaleString());//by default US
console.log(hundreds.toLocaleString('en-IN'));//it gives in indian

let maxi = Number.MAX_VALUE //like INT_MAX
let mini = Number.MIN_VALUE //like INT_MIN


///////// ******* Maths Library ************ //////////////////

console.log(Math);

console.log(Math.abs(-4));
console.log(Math.round(4.5));//5
console.log(Math.ceil(4.1));//5
console.log(Math.floor(4.9));//4
console.log(Math.min(4,3,6,8,9));
console.log(Math.max(4,3,6,8));


console.log(Math.random()) //between 0 to 1
console.log(Math.random()* 10  + 1);
console.log((Math.random()*10 ) + 1); // *10 for decimal & + 1 for 0.41 --> 4
console.log(Math.floor(Math.random()* 10)+ 1);


//if we have value between 10 to 20

let min = 10
let max = 20

console.log(Math.floor(Math.random() * (max-min +1))+min); // +1 0 case avoid
