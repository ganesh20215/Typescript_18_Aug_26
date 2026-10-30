
//Abstraction means Showing only essential details and hiding internal implementation details.

//Why Abstraction is Important
// Hide complex implementation 
// Improve security 
// Reduce code complexity 
// Increase maintainability 
// Force child classes to follow rules 


//We can achieve abstraction in two ways
//1. Abstract Class (0 to 100% abstraction)
//2. Interface      (100% abstractions.)


//1. Abstract Class (0 to 100% abstraction)
//When we declared any class with abstract keyword that class known as Abstract class
//With an AC we can achieve 0 to 100% abstraction
//We can achieve abstraction with hiding method implementation
//If your class delcared as an AC then it is not mentarory to define AM
//If your class contain AM then it is mantetory to define AC.
//AC can contain concrete method
//AC can contain static method
//AC can contain constructor
//We can't create an object of AC
//We can call all AC methods using Impletemented class (child class)

abstract class DemoTestCheck {

    constructor(){
        console.log("This is an constractor");
    }

    abstract abMethod() : void; //abstract method

    sum(){
        console.log(10 + 20);
    }

    static add(){
        console.log(50 + 60);
    }
}

// const d = new DemoTestCheck();

class  Deeptraj extends DemoTestCheck{
   
    abMethod() : void{
        console.log("Abstract classs Method");
    }
}

const dc = new Deeptraj();
dc.abMethod();
dc.sum();
DemoTestCheck.add();