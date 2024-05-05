// The this keyword refers to the context where a piece of code, such as a function's body, is supposed to run.
//we have to refer to current context


//✅When a regular function is invoked as a method of an object (obj.method()), this points to that object. 



const user = {
    name : "Omkar",
    age : 20,
    greet : function(){
        console.log(`Welcome to website, ${this.name}`);
        console.log(this);
    }
}

// console.log(user.greet())
// user.name = "Saurabh"
// console.log(user.greet())

console.log(this); //empty {} object
//the name of global object inside browser is window objct


/*

//✅When invoked as a standalone function (not attached to an object: func()), 
//this typically refers to the global object (in non-strict mode) or undefined (in strict mode).
function  chai()
{
    let username = "Sauriii"
    console.log(this);
    console.log(this.username); //undefined
}

chai()


//✅The value of this in JavaScript depends on how a function is invoked (runtime binding),not how it is defined 

const chai2 = function(){
    let username = "Sauriii"
    console.log(this);
    console.log(this.username); //undefined
}

chai2()  */




//Arrow functions  =>

const chai3 = () =>{
    
    let username = "Sauriii"
    console.log(this);
    console.log(this.username); //undefined
}


//1 () => {} 

//2.we can store to any variable

const Addtwo = (num1,num2) =>{
    return num1+num2;
}

console.log(Addtwo(4,5));



//3. implicit return

const twoadd = (num1,num2) => (num1+num2)

console.log(twoadd(7,3));

//Note👾 : {} braces aala ki return lihych () ala tr nhi lihaych

const returnObject = () => {username:"Omkar"} // it will give undefined

const returnObject1 = () => ({username:"Omkar"}) // we have to wrap inside ()
console.log(returnObject());//undefined
console.log(returnObject1());
