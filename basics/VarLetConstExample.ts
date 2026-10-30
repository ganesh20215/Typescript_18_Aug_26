

//Var Keyword
//when we have to decleared variable that time we have to use var keyword.
//var is function-scoped and accessible throughout the function still we can able to access in block


// function demoTest() {
  
//     if (true) {
//         var no : number = 500;
//     }
//     console.log(no);
// }

// demoTest();

//2. Redeclaration Allowed
//Same variable can be declared again. 
//May create bugs in large applications.

// var n1 : string = "Anisa";
// var n1 : string = "Joydeep";

//3. Reassignment Allowed
//Value can be changed anytime.

// var student = "Neha";
// student ="Rakesh";
// console.log(student);


//4. Hoisting
//Hoisting means variable declarations move to the top of their scope during execution.
// console.log(student);
// var student = "Nehal";


//let keyword
//The let variables are block-scoped

//1. let keyword is for block scope

// function demoTest() {
//     if (true) {
//         let no : number = 500;
//         console.log(no);
//     } 
// }


//2. Reassignment Allowed
// let student = "Rakesh";
// student = "Vikram";
// console.log(student);

//3. Redeclaration is not Allowed
// let n1 : string = "Anisa";
// let n1 : string = "Joydeep";
// console.log(n1);

//4. Hoisting is not allowed in let keyword
// console.log(student);
// let student = "Nehal";

//const keyword
//When we do not want to change the variable value that time const keyword we have to use
//const is used to declare constant variables. 
//Value cannot be reassigned after initialization.
//Use when value should not change.

// const pi_value = 3.14;
// console.log(pi_value);

//1. const keyword accessible scope is block only
// function demoTest() {
//     if (true) {
//         const no : number = 500;
//         console.log(no);
//     } 
// }


//2. Reassignment isn't Allowed
// const pi_value = 3.14;
// pi_value = 20;
// console.log(pi_value);


//3. Redeclaration is not Allowed
// const n1 : string = "Anisa";
// const n1 : string = "Joydeep";


//4. Hoisting is not allowed in const keyword
// console.log(student);
// const student = "Nehal";


//Difference between var, let, keyword

//var                               //let                                   const
//1. function scope                 1. block                                1. block
//2. Redeclation is allowed         2. Redeclation isn't allowed            2. Redeclation isn't allowed
//3. Reassigment is allowed         3. Reassigment is allowed               3. Reassigment isn't allowed
//4. Hositing is allowed            4. Hositing isn't allowed               4. Hositing isn't allowed


