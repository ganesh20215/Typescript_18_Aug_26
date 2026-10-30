

//Polymorphism
//The word Polymorphism means "Many Forms"

// Types of Polymorphism in TypeScript
//1. Compile-Time Polymorphism / Method Overloading / Static Polymorphism
//2. Run-Time Polymorphism / Method Overriding  / Dynamic Polymorphism

//1. Compile-Time Polymorphism / Method Overloading / Static Polymorphism
//MO means having multiple same methods with different signature/parameter

//Rules for Method Overloading
//1. Only One Implementation Allowed
//2. The Implementation Must Follow the Signatures
//3. We can't define any new method in method declation and method implemenation
//4. Implementation Method Must Handle All Cases


//class Calculation {
    
    // add(a : number, b: number):number;
    // add(a : string, b: string):string;
    
    // add(a : any, b : any) : any{
    //     return a + b;
    // }

    //sub(a : number, b: number):number;

    //Only One Implementation Allowed
    //   add(a : any, b : any) : any{
    //     return a + b;
    // }
//}

// const c = new Calculation();
// console.log(c.add(10, 20));
// console.log(c.add("T", "Maulikaa"));


//4. Implementation Method Must Handle All Cases

// class  Student {
//     getStudentId(id : number) : number;
//     getStudentId(location : string) : string;

//     getStudentId(value : number | string) : any{
//         if(typeof value === "number"){
//             return value;
//         }else{
//             return value;
//         }
//     }
// }

// const s = new Student();
// console.log(s.getStudentId(1));
// console.log(s.getStudentId("Vivek"));


//Function Overloading
// function add(a: number, b: number): number;
// function add(a: string, b: string): string;

// function add(a: any, b: any): any {
//     return a + b;
// }

// console.log(add(10, 20));
// console.log(add("Hello ", "World"));
