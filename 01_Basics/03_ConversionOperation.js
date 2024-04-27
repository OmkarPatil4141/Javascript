let score = "45";

//with both types we can check type of variable
console.log(typeof score);
console.log(typeof(score));

let scoreInNumber = Number(score);
console.log(typeof scoreInNumber);  //when score variable contains 45 it is ok but what if score 
                                    //variable contains 45abc 

let newScore = "45abc";

let newScoreInNumber = Number(newScore);
console.log(typeof newScoreInNumber); //still it is showing type as a number but what actually in that variable
console.log(newScoreInNumber); //NaN   (Not a number)

//now what if  variable score have null

let nscore = null

let NumberScore = Number(nscore)

console.log(typeof NumberScore) //number

console.log(NumberScore) // 0

//if score variable have undefined then it will give NaN
//true -> 1
//false ->0

//for above 3 cases this is somehow drawback of js --->TS🥳


/* Boolean */

let isLoggedIn = 1;

let boolIsLoggedIn = Boolean(isLoggedIn);
console.log(typeof boolIsLoggedIn)
console.log(boolIsLoggedIn)


// 1 => true   0=>false

//" " => false  "nonemotystring" =>true



/***************************Operations*******************************/

let value = 3;

let negValue = -value;
console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);   simple working like maths
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);

//string operations are somwhow diffrent

let str1 = "Jay";
let str2 = " Ganesh";

let str3 = str1 + str2; //concat
console.log(str3);

console.log("1"+2);
console.log(1+ "2");
console.log("1"+2+2);
console.log(2+2+"1");


console.log(true);
console.log(+true);

console.log("");
console.log(+"");



