
//is is a good girl. She is attending lectures regularly.


//tokens
//In TypeScript, a token is the smallest individual unit of a program that has meaning to the compiler.

//Type of tokens
// 1. Keywords
// 2. Identifiers
// 3. Literals
// 4. Operators
// 5. Separators (Punctuators)

//1. Keywords
//Keywords are reserved words in TypeScript. 
//They have special meaning for the compiler. 
//Cannot be used as variable names, function names, or class names.
//Typescript is a case sensitive Language
//let t1 : number = 100;

//2. Identifiers
//Identifiers are names used for variables, functions, classes, interfaces, and other program elements.


//Rule to declared Idetifier
//1. Allowed Characters (Letters, Numbers, UnderScore _, Dollar sign $)

//let ABC : number = 100;
//let abc : number = 100;
//let ab10 : number = 100;
//let ab_tc : number = 100;
//let ab$tc : number = 100;

//2. Cannot Start with Number
//let 10ab : number = 200;

//3. Keywords Cannot Be Used
//let let : number = 400;

//4.Typescript is a case sensitive Language
//let If : number = 100;

//5. Special Characters Not Allowed
//let test#check : number = 100;

//6. we don't have any restrictions for keep lengthy name but shorter name always preferable
// let testCheckHellotestCheckHellotestCheckHellotestCheckHello : number = 100;
// console.log(testCheckHellotestCheckHellotestCheckHellotestCheckHello);

//3. DataTypes
//we have two types of datatypes
//a. Build In Data Type
//b. User Defined Data Type 

//a. Build In Data Type/Primitive data types
// Why Data Types are Important?
// Better code readability
// Type safety
// Error detection at compile time
// Improves code maintenance

//1. number data type
// let salary : number = 500.50;
// console.log(salary);

//2. string data type
// let studentName : string = "Vikas Kapanwar";
// let learner : string = 'R';
// console.log(studentName);
// console.log(learner);

//3. boolean data type
// let address : boolean = 100;
// console.log(address);

//4. Null data type 
// Represents intentional empty value.
// let no : null = null;
// console.log(no);

//5. Undefined
//Variable declared but value not assigned.
//let no;
//console.log(no);

//6. Symbol
//Used to create unique identifiers
// let n1 : Symbol = Symbol("Payal");
// let n2 : Symbol = Symbol("Payal");
// console.log(n1 === n2);

// let studentName1 : string = "Vikas Kapanwar";
// let studentName2 : string = "Vikas Kapanwar";
// console.log(studentName1 === studentName2);

//7. BigInt
//Used for very large integers beyond safe limit.
// let no : bigint = 23456789098765432345678n;
// console.log(no);

//any datatype
//any datatype can conatin any value
//Avoid any datatype when it possible because it is remove typescript safty.
// let value : any = 10;
// value = "Neha";
// value = false;

// let salary : number = 500.50;
// salary = false;

// console.log(value);


