///////////////////////////////////////
// fasly values
// 0 , -0 ,false, NaN , Undefined, null , "", BigInt --> 0n

// truthy values
// "non-empty-string" --> "0" ,"false", " " , [], {}, function(){}


const useremail = "op@gmail.com"

if(useremail){
    console.log(`Email found🥳with name , ${useremail}`);
}
else{
    console.log("Email not found🥲");
}


//An empty array gives us an truthy value if we have to check then use length property


const Emails = []

if(Emails.length == 0){
    console.log("No emails found");
}
else{
    console.log("Emails found");
}


//Nullish coalescing operator (??) : null undefined yavr chalto
//null value asel tr safety check krto

// if we some data from database like firebase it gives us two values and 
//sometimes returns null values also

let a;

a = 5 ?? 10
console.log(a);  // a undefined hota mhnun value aali first pn jr 

let b;

b = null ?? 100
console.log(b);


var val = undefined ?? 15
console.log(val);
