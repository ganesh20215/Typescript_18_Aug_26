
//constructor
//1. In TypeScript, a constructor is a special method inside a class that is automatically called when an object is created.
//2. The constructor method is named constructor
//3. It runs automatically when using new keyword.
//4. Used to initialize object properties.

// class EmployeeData{
//     //name : string = "Nehal";
//     // constructor(){
//     //     console.log("This is a constrcutor");
//     // }

//     studentName : string;
//     studRollNumber : number;

//     constructor(studRollNumber : number, studentName : string){
//         this.studentName = studentName;
//         this.studRollNumber = studRollNumber;
//     }
// }

// const e = new EmployeeData(1, "Rakesh");
// console.log(e.studRollNumber, e.studentName);

// const e2 = new EmployeeData(2, "Aman");
// console.log(e2.studRollNumber, e2.studentName);


//Private Constructor
//1. A private constructor is a constructor that cannot be accessed outside the class.
//2. It is used when you want to control object creation.
//3. When we want to apply restrictions on users for do not create an object of the class that time we will define class constructor as private.
//4. Singleton design pattern

// class JoydeepDemo {

//     private constructor() {
        
//     }
// }

// let j = new JoydeepDemo();