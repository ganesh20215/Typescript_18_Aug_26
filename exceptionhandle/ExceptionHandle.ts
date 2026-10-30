
// Exception Handle
// Exception : Unprectible condition

// Need of Exception Handle
// console.log("Hello All...");
// let data : any = null;
// console.log(data.length);
// console.log("Good Evening");

// Build In Exception
// 1. TypeError : Occurs when a value is not of the expected type.
// let data : any = null;
// console.log(data.length);

// 2. ReferenceError : Occurs when accessing a variable that is not defined.
// console.log(sameer);

// 3. RangeError : Occurs when a value is outside the allowed range.
// let arr = new Array(-5);
// console.log(arr);

// 4. SyntaxError : Occurs when JavaScript encounters invalid syntax.
// JSON.parse("{name: 'Gauri'}");

// 5. URIError : Occurs when invalid URI functions are used.
// console.log(decodeURI("%s"));

// 6. EvalError : Related to the eval() function. It is rarely encountered in modern JavaScript/TypeScript.
// console.log(EvalError("Hello"));


// How to handle exception
// we can handle exception with try and catch block
// In try block we have to define statement which throws an exception
// In a catch we can handle that exception

// console.log("Hello All...");
// let data : any = null;
// try{
//     console.log(data.length);
// }catch(TypeError){
//     console.log("Exception Handle");
// }
// console.log("Good Evening");


// Rules of Exception Handle
// 1. We can't define multiple try block and single catch block

// try{
//     let data : any = null;
// }try{
//    console.log("Hello All");
// }catch{

// }

// 2. We should use one try block and one catch block only
// try{
//     let data : any = null;
//     console.log(data.length);
// }catch(TypeError){
//     console.log("Exception Handle");
// }


// 3. We can't delcared single try block
// try{
//     let data : any = null;
//     console.log(data.length);
// }


// 4. We can't delcared single catch block
// catch(TypeError){
//     console.log("Exception Handle");
// }


// finally block
// When we have to execute important line of code or we have to print important statements
// that time we have to use finally block

// try{
//     let data : any = null;
//     console.log(data.length);
//}
// catch(TypeError){
//     console.log("Exception Handle");
// }
// finally{
//     console.log("This is a fianally block");
// }


// 5. We can define try block without catch block but we have to use finally block

// try{
//     let data : any = null;
//     console.log(data.length);
// }finally{
//     console.log("This is a fianally block");
// }

// 6. If we won't get any exception then still finally block will be executed.
// try{
//     let data : any = "Nitesh";
//     console.log(data.length);
// }finally{
//     console.log("This is a fianally block");
// }


// 7. When we won't get any exception then your catch block will not executed.

// try{
//     let data : any = "Neha";
//     console.log(data.length);
// }catch(TypeError){
//     console.log("Exception Handle");
// }finally{
//     console.log("This is a fianally block");
// }
