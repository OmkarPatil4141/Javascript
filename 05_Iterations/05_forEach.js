coding =  ["js", "cpp", "angular", "react"]


coding.forEach(function(val){
    console.log(val);
})

console.log("-----------------------------------------------");

coding.forEach((val) =>{
    console.log(val);
})

console.log("-----------------------------------------------");


coding.forEach(element => {
    console.log(element);
});

console.log("-----------------------------------------------");

function print(item){
    console.log(item);
}

console.log("-----------------------------------------------");
coding.forEach(print) //call back give referece of function dont execute it print() ❌  print ✅

// our callback doesnt come with only one parameter as value or item it also comes
//with index and array parameter


coding.forEach((item,indx, arr)=>{

    console.log(`item ${item} at index ${indx} in array ${arr}`);
    // console.log(arr);

})




////////////////////////////////////////////////////////////////////////////////////////////////////////////

const mycoding = [

    {
        languageName : "Javascript",
        extension : "js"
    },

    {
        languageName : "java",
        extension : "java"
    },

    {
        languageName : "python",
        extension : "py"
    }
]

mycoding.forEach((item) =>{
    
    console.log(item.languageName);
    console.log(item.extension);
})