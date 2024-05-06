
const coding =  ["js", "cpp", "angular", "react"]

const returned  = coding.forEach((val) =>{
    // console.log(val);       // but we dont have to print value we have to store in it
    return val;
})
console.log(returned); // undefined means forEach does not return anything


// undefined means forEach does not return anything
// but it is not necessary that always we have to print values sometimes we have to store values


///////////////////////////////////////////////////////////////////////////////////////////////////////

const mynums = [1,2,3,4,5,6,7,8,9,10]

const returnednums = mynums.filter( (num) => num > 4)  //implicit return
console.log(returnednums);  

const explicitreturn = mynums.filter( (num) =>{
    return num < 5   //Note👾 : {} braces aala ki return lihych () ala tr nhi lihaych

})

console.log(explicitreturn);


// so what we have to do same thing with forEach

 const newarr = []
mynums.forEach((num)=>{
    if(num > 4)
    {
        newarr.push(num)
    }
})
console.log(newarr);

const Books = [
    {title:"Book-one",gener : "Fiction", publish:1981, edition:2004},
    {title:"Book-two",gener : "Non-Fiction", publish:1992, edition:2008},
    {title:"Book-three",gener : "History", publish:1999, edition:2007},
    {title:"Book-four",gener : "Science", publish:1989, edition:2010},
    {title:"Book-five",gener : "Non-Fiction", publish:2009, edition:2014},
]

let  filteredBooks = Books.filter((book)=> book.gener === 'Non-Fiction')
console.log(filteredBooks);


filteredBooks = Books.filter((book) => {
    return book.publish > 1991 && book.edition<2014
})
console.log(filteredBooks);
