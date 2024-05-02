

function anyName()
{
    console.log("Jay Ganesh❤️💫")
}

// anyName --> it is considered as reference of function

anyName() //function call


function addTwoNumbers(num1,num2) //function defination --> parameters
{
    // let result = num1+num2;
    return num1+num2;
}

const result = addTwoNumbers(3,4);  //these are known as arguments
console.log(result);




function loginUserMessage(username)
{
    if(username === undefined)
    {
        console.log("Please Enter the Username👾");
        return
    }

    return `Hello ${username} You logged in successfully🥳`
}

// console.log(loginUserMessage("Omkar"))  //Hello Omkar You logged in successfully🥳

console.log(loginUserMessage()) //when we does not enter argument it  will not null❌ it is undefined✅



//we can also add our default parameter 

function loginUserMessage1(username = "Saurii")
{
    if(username === undefined)
    {
        console.log("Please Enter the Username👾");
        return
    }

    return `Hello ${username} You logged in successfully🥳`
}


console.log(loginUserMessage1()) //by default it will taking saurii
console.log(loginUserMessage1("Akkya")) //if we provide argument then it will override value 
 