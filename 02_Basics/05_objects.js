//destructuring of objects
//it is considered as syntactical sugar
//it means extracting only required data from array or object


const course = {
    coursename : "Js in Hindi",
    courInsrtuctor : "Hitesh Sir",
    courseDuration : "3 months",
    coourseFees : "Free"
}


//We can access by obj_name.key or obj["key"] but it becomes more complicated and we want to write more code
//hence we can destructure the object

const {courInsrtuctor} = course;
console.log(courInsrtuctor); //there is no need os course.courInsrtuctor

//we can also give our own name to that key e.g

const{courInsrtuctor:instructor} = course; 
console.log(instructor);


//API -> used to communicate two applications
//it is in json -> json is basically js  object but represented as both key and value as a string

// {
//     "Name" : "Omkar",
//     "Age"  :  21,
//     "Location": "Nerle",
// }


// when we have big JSON then we use some tools to study the code like JSON formatter 

