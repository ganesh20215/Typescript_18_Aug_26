

//Interface
//An Interface in TypeScript is used to define the structure (blueprint) of an object, class, or function.
//With an Interface we can achieve 100% abstractions
//Interface contain abstract method and property only
//Interface don't constin any constructor
//We con't create an object of an Interface
//When we have to create Is:A relationship between class and interface then implements keywords we have to use
//With Interface we can achieve multiple Inheritence

// interface Learner {
//     id : number,
//     name : string,
//     add(a : number, b : number) : void;
// }

// const l : Learner = {
//     id : 1,
//     name : "Shatish",
//     add(a, b) {
//         console.log(10 + 20);
//     },
// }

// console.log(l.id);
// console.log(l.name);
// l.add(10, 20)


//With classes
 
// class Staff implements Learner{
//   id: number = 1;
//   name : string = "Nitesh";
//       add() {
//         console.log(10 + 20);
//     }
// }

// const s = new Staff();
// console.log(s.id);
// console.log(s.name);
// s.add();


//With Interface we can achieve multiple Inheritence

// interface Dog{
//     eat() : void;
// }

// interface Cat{
//     eat() : void;
// }

// class ImplemetedDemo implements Dog, Cat{
   
//     eat(): void {
//         console.log("Animal needs to eat banana");
//     }
// }

// const idm = new ImplemetedDemo();
// idm.eat();


// Optional Properties
// Use ? to make a property optional.
// Optional property may or may not be provided.

// interface DemoTestCheck{
//     no1 : number,
//     name : string,
//     address?: string
// }

// const dt : DemoTestCheck = {
//     no1 : 11,
//     name : "Sameer",
// };


//Interface with Array in TypeScript

interface Student {
    name : string;
    subjects : string[];
}

const st : Student = {
    name : "Aman",
    subjects : ["Physics", "Chemistry", "Maths"]
};

console.log(st.name);
console.log(st.subjects);
