// An IIFE (Immediately Invoked Function Expression) is a JavaScript function that runs as soon as it is defined


/*
    Use case :Avoid polluting the global namespace
    Because our application could include many functions and global variables from different source files, 
    it's important to limit the number of global variables. 
    If we have some initiation code that we don't need to use again, we could use the IIFE pattern. 
    As we will not reuse the code again, using IIFE in this case is better than using a function 
    declaration or a function expression.

*/


// ()() one () for writing function  in it 
//      second () for calling that fuction


//This are also known as named IIFE
(function Chai(){
    console.log("Jay Ganesh❤️");
})(); //semicolon is very important because IIFE function dont know where to stop the contex of invoked function



((name) =>{
    console.log(`DB connected ${name}`)
})('Successfully')
