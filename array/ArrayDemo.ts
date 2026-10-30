
//Array
let a = 10, b = 20, c = 30, d = 40, e = 50;

//Need of array
//an array is used to store multiple values in a single variable.

//Declaration of array
//An array is a special type of variable that stores multiple values.
//The values can be of the same data type or different data types
//Arrays index starts from 0.
//Arrays are an ordered collection of elements.

 let learnerName : string[] = ["Ali", 'Anisa', 'Vivek', 'Vikram', 'Radhika'];
 let rollNo : number[] = [2, 3, 4, 5, 6];

//  console.log(learnerName);
//  console.log(rollNo);

 //Index start with 0
//console.log(learnerName[5]);

//for...of loop
// for (let n of learnerName){
//     console.log(n);
// }

//for...in loop
// for (let n in learnerName){
//     console.log(n);
// }

//forEach() loop
// learnerName.forEach((ln) =>{
//     console.log(ln);
// })

//size of the array
//console.log(learnerName.length);

//To get the values from array using simple for loop
// for (let i = 0; i < learnerName.length; i++){
//     console.log(learnerName[i]);
// }


//GENERICS
//Generics in TypeScript let you write reusable, type-safe code that works with multiple data types—without losing type information.
//Instead of hardcoding a type (like number or string), you use a type parameter (commonly T) as a placeholder.
//Beside code will work but we loose type safety.

// let actors : Array<string> = ['Salman', 'Ranveer', 'Alia', 'Amir', 'Kapil']

//Genrics with functions
// function multiplication<T>() : void {
//     console.log(10 * 20);
// }

// multiplication();

//1. push() : used to add data in array (Data will add at the last of array)
// actors.push("Payal");
// console.log(actors);

//2. unshift() : used to add data first in array
// actors.unshift("Payal");
// console.log(actors);

//3. pop() : Remove from the end
// let actors : Array<string> = ['Salman', 'Ranveer', 'Alia', 'Amir', 'Kapil']
// actors.pop();
// console.log(actors);

//4. shift() : Remove from beginining
// let actors : Array<string> = ['Salman', 'Ranveer', 'Alia', 'Amir', 'Kapil']
// actors.shift();
// console.log(actors);

//5. concat()- Used to combine two or more arrays.
// let a1 = [1, 3];
// let a2 = [2, 4];
// const r = a1.concat(a2);
// console.log(r);

//6. slice() - Used to extract part of an array
// let actors : Array<string> = ['Salman', 'Ranveer', 'Alia', 'Amir', 'Kapil']
// console.log(actors.slice(1, 3));

//not worked
//7. splice()- Used to add, remove, or replace elements in array..
//let actors : string[] = ['Salman', 'Ranveer', 'Alia', 'Amir', 'Kapil'];

//add data in array
// actors.splice(0, 0, "Anuj");
// console.log(actors);

//remove/delete in array
//add data in array
// actors.splice(2, 3);
// console.log(actors);

//8. indexOf() - Used to find index position of an element
// let actors : string[] = ['Salman', 'Ranveer', 'Alia', 'Amir', 'Kapil'];
// console.log(actors.indexOf('Amir'));

//9. includes()- Checks whether element exists in array.
// let actors : string[] = ['Salman', 'Ranveer', 'Alia', 'Amir', 'Kapil'];
// console.log(actors.includes('Nidhi'));

//10. toString()- Converts array into string
// let actors : string[] = ['Salman', 'Ranveer', 'Alia', 'Amir', 'Kapil'];
// console.log(actors.toString());

//Multi-Dimensional Array
//A Multi-Dimensional Array is an array that contains another array inside it.

let no : number[][] = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

for (let i = 0; i < no.length; i++){    //outer loop for row
    for (let j = 0; j < no[i].length; j++){ //inner loop for column
        console.log(no[i][j]);   
    }
}