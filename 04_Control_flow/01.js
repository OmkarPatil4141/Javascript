//Control flow means that when you read a script, you must not only read 
//from start to finish but also look at program structure and how it affects order of execution.

//it consists conditionals and loops

if(true)
{
    //then these stataements will run
}

//////////////////////////////////////////////////////////////////////
let userloggedin = true;

if(userloggedin){
    console.log("User is already logged in");
}
console.log("This statement will always run, whatever is status of if statement");

userloggedin = false;
//////////////////////////////////////////////////////////////////////
if(userloggedin){
    console.log("User is already logged in");
}
else{
    console.log("User is not logged in yet");
}
console.log("This statement will always run, whatever is status of if statement");

//////////////////////////////////////////////////////////////////////


//operators
// < > <= >= == != === !==  -> relational operators
// && ||  -> logical operators
// ** * / % + -  -> Arithmatic operators
// (condition ? ifTrue : ifFalse)     conditional ternary operators


// functionalty of all operators is same as other pro. langs
//////////////////////////////////////////////////////////////////

//condition ? exprIfTrue : exprIfFalse
function getFee(isMember) {
    return isMember ? '$2.00' : '$10.00';
  }

  // if ismember then $2 else $10

console.log(getFee(true));
console.log(getFee(false));

//////////////////////////////////////////////////////////////////

onsole.log(1 !== 1);
// Expected output: false

console.log('hello' !== 'hello');
// Expected output: false

console.log('1' !== 1);
// Expected output: true

console.log(0 !== false);
// Expected output: true

//////////////////////////////////////////////////////////////////







  