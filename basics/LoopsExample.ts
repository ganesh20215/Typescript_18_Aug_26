
//Need of loops in typescript

// console.log("1");
// console.log("2");
// console.log("3");
// console.log("4");
// console.log("5");
// console.log("6");
// console.log("7");
// console.log("8");
// console.log("9");
// console.log("10");


//for loop : Used when the number of iterations is known.
// Initialization executes once (let i : number = 1)
// Condition checks (i <= 10)
// Increment/Decrement executes ( i++)
// Code executes 
// Process repeats

// for (let i : number = 1; i <= 1000; i++){
//     console.log(i);
// }


//Nested For Loop
// for (let i : number = 1; i <= 3; i++){
//         for (let j : number = 1; j <= 3; j++){
//             console.log(i + "    " + j);
//     }
// }


//while loop
//when we don't know how many times we want to execute our loop that time while loop we have to use

// let i = 6;
// while (i <=5 ) {
//     console.log(i);
//     i++;
// }


//do while loop
//when the number of iterations is unknown.
//If our first condition is false and still you want to execute your loop at least once.

// let i = 6;
// do{
//     console.log(i);
// }while (i <=5);

//If Else Statement

// let marks : number = 180;
// if (marks >= 190) {
//     console.log("Candidate is eligible for MBBS");
// }else{
//     console.log("candidate will be IIT Engineer..");
// }


//if else if ladder
// let marks : number = 35;
// if (marks >= 190) {
//     console.log("Candidate is eligible for MBBS");
// }else if (marks >= 180 && marks <=189) {
//    console.log("candidate will be IIT Engineer..");
// }else if (marks >= 120 && marks <=179) {
//    console.log("candidate will be Normal Engineer..");
// }else if (marks >= 80 && marks <=119) {
//    console.log("candidate will be Pharma..");
// }else if (marks >= 40 && marks <=79) {
//    console.log("candidate will be BSC");
// }else{
//     console.log("Candidate will be Failed.");
// }


//Brake Statement
//When we don't want to execute unnecessary loop that time brake statement we have to use.

// for (let index = 1; index <= 5; index++) {
//     if (index == 3) {
//         break;
//     }
//     console.log(index);
// }


//continue statement
//Skips current iteration

// for (let index = 1; index <= 5; index++) {
//     if (index == 3) {
//         continue;
//     }
//     console.log(index);
// }


//Switch Statement
//switch statement is used to execute one block of code from multiple conditions.

// let day = 30;

// switch (day) {
//     case 1:
//         console.log("Monday");
//         break;
//     case 2:
//         console.log("Tuesday");
//         break;
//     case 3:
//         console.log("Wedesday");
//         break;
//     case 4:
//         console.log("Thursday");
//         break;
//     case 5:
//         console.log("Friday");
//         break;
//     default:
//         console.log("Invalid day selection");
//         break;
// }


let day = "Bike";

switch (day) {
    case "Bike":
        console.log("ATM Machine");
        break;
    case "Savings":
        console.log("Saving Account");
        break;
    case "Business":
        console.log("Current Account");
        break;
    case "Money":
        console.log("Cash Withrwal");
        break;
    case "Rupees":
        console.log("Balence");
        break;
    default:
        console.log("Invalid day selection");
        break;
}