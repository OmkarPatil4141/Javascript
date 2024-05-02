

function calculateCartPrice(value1)
{
    return value1;
}

console.log(calculateCartPrice(6)); //it will give expected output as 6

function calculateCartPrice1(value1)
{
    return value1;
}

console.log(calculateCartPrice1(6,10,11)); //it doesnt give error but it take value = fisrt parameter



//if we dont know how much parameters are coming to our function then we use ...rest operator


function calculateCartPrice2(...value1)
{
    return value1;
}

console.log(calculateCartPrice2(6,10,11)); //it will give array of [6,10,11]



function calculateCartPrice3(value, vallue,...value1)
{
    return value1;
}

console.log(calculateCartPrice3(6,10,11,4,5)); //it will give array of [11,4,5] because 6 goes to value 
                                               //10 goes to vallue
                                            

//Handling object and arrays with function

const obj = {
    name : "omkar",
    age : 20
}


function handleObject(anyob)
{
    console.log(`Hello ${anyob.name} you are ${anyob.age} years old`)
}

handleObject(obj);
handleObject({
    name : "Saurii",
    age : 20
})



const Myarr = [10,20,30,40]

function handleArray(arr)
{
    console.log(arr[2]);
}

handleArray(Myarr)
handleArray([10,40,100,1000])