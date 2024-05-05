
if(true)
{
    let a = 100;
    const b = 200;
    var c = 300;
}


// console.log(a); block scope
// console.log(b); block scope
console.log(c); // global scope of var hence not used much





////////////////////////nested blocks///////////////////////////////////////////
/*

A closure is the combination of a function bundled together (enclosed) with references to its surrounding state 
(the lexical environment). 
In other words, a closure gives you access to an outer function's scope from an inner function. 
In JavaScript, closures are created every time a function is created, at function creation time.

*/

function One()
{
    const name = "Appa"

    function Two()
    {
        const surname = "Narsale"
        console.log(name)
    }

    // console.log(surname)     line by line execution hence error
    Two()
}

One()







/////////////////////////////// Hoisting     /////////////////////////////

console.log(Addone(8))  //we can call simple function before its defination

function Addone(num)
{
    return num+1;
}

// Addtwo(5)               error

const  Addtwo = function(num)      //  but we cant call Expressoinalfunction before
{
    return num+2;
}

console.log(Addtwo(5));
