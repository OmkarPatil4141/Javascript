
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

// Addtwo(5)

const  Addtwo = function(num)      //  but we cant call Expressoinalfunction before
{
    return num+2;
}

console.log(Addtwo(5));
