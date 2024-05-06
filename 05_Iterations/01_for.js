//A loop is a sequence of instructions that is repeated until a certain condition is met

//for

for (let i = 0; i <= 10; i++) {
    
    console.log(`value of i is ${i}`);
}



let array = ["Omkar","Saurii", "Akkya", "Patya", "Vaibhss","Ronny","Harshya"]

for (let index = 0; index < array.length; index++) {
    const element = array[index];
    console.log(element);
}

for (let i = 0; i < array.length; i++) 
{
    console.log(`outer loop's ${i}`);
    for (let j = 0; j < array.length; j++) 
        {
    console.log(`inner loop value ${j} for outer loop ${i}`);
        
    }
    
}



//break leaves ar breaks the loop when certain condition is met
//continue doesnot execute perticular iteration when certain condition is met

for (let i = 0; i < 10; i++) 
{
    if(i == 5) break;
    console.log(`value is ${i}`);
}


for (let i = 0; i < 10; i++) {
    if(i == 5) continue;
    console.log(`value is ${i}`);   
}