////////////////////////////////////////////////////////////////////////////////////////////////////////////
// As we have seen we cannot iterate object by for of loop


const myobj = {
    js : "Javascript",
    py : "python",
    cpp : "c++",
    rb : "Ruby",
    swift : "Swipt by app"
}

for (const key in myobj) {
    console.log(key); // ierator key only gives keys of object
    console.log(myobj[key]); // hence we can get values in these way
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
// For in loop for arrays

const arr = ["js", "cpp", "angular", "react"]
for (const key in arr) {                           // iterator in for in loop gives keys and keys for array are indices 
    console.log(key);                              // objetcts  are designed for overcome the drawback of array means
    console.log(arr[key]);
}                                                  // arrays key s are indices


////////////////////////////////////////////////////////////////////////////////////////////////////////////

const map = new Map()
map.set('IN','India')
map.set('USA','United states of america')
map.set('Fr','France')
map.set('IN','India')//it only keep uniqye keys!!

for (const key in map) {
    console.log(key);            //map is not iterable hence it does not give error but 
}