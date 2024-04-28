// console.log(2 > 1);
// console.log(2 >= 1);  its working is predictable
// console.log(2 == 1);
// console.log(2 != 1);



console.log("2" == 2); //it will check only value
console.log("2" === 2); //it will check  value and type both(strict check)


//equality checks and comparisions work differently
console.log(null > 0);
console.log(null == 0); 
console.log(null >= 0); //means comparator converts null to number and equality not


//everythin false
console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);


