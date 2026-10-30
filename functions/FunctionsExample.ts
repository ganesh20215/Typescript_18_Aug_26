
//A function is a reusable block of code that performs a specific task

//1. Normal Function (No Parameter & No Return Type)
// function addition() {
//     console.log(10 + 20);
// }
// addition();


//2. Parameterized Functions
// function addition(a : number, b : number) {
//     console.log(a + b);
// }
// addition(30, 40);
// addition(50, 40);

//3. Function with Return Type
// function addition() : number {
//     return 20 + 30;
// }
// const output = addition();
// console.log(output - 20);

//4. Function with Optional Parameter (?)
// function addition(a : number, b : number, n1? : string) {
//     console.log(a + b);
// }
// addition(30, 50);

//5. Function with Default Parameter
//Default value is used if no argument is passed.

// function greet(wish : string = "Good Evening") {
//     console.log(wish);
// }
// greet("Good Morning");

//6. Anonymous Function
//Anonymous function is a function without a function name

// const tc = function() : void {
//     console.log("Welcome to Anonymous Functions");
// };
// console.log(tc());

//7. Arrow Function/Lambda Expression
// const tc2 = (a : number, b : number) => {console.log(a + b);}
// console.log(tc2(10, 20));

//8. callback function 
//: Function passed as an argument to another function.

// function greet(wish : string, callback: () => void) {
//     callback();
//     console.log(wish);
// }

// function message() {
//     console.log("Hello All, How Are You???");
// }

// greet("Anisa", message);

//9. Higher Order Function
//Take another function as an argumant
//return function

function calculation(a : number, b : number, data: (x : number, y : number) => number) : number {
    return data(a, b);
}

const output = calculation(10, 20, (x, y) => x+y);
console.log(output);

//10. Nested Functions
// function outer(): void {
//     function inner(): void {
//         console.log("Inner Function");
//     }
//     inner();
// }
// outer();

//11. Immediately Invoked Function Expression (IIFE)
// Its is a function that created and executed immediatly

// (function (){
//     console.log("Hello Team");
// })();

