

//Method Overriding in TypeScript
//1. Same method name with same in a parameter which is known as MOR.
//2. MOR always happemned between parent and child class
//3. When child doesn't like parent class method implementation and child class want to define 
//   his own implemention that time method Overiding needed

class FatherMother {
    
    education(){
        console.log("My son should be an Engineer..");
    }

}

class Son extends FatherMother {
    
    education(): void {
        console.log("I will be a Doctor");
    }
}

const s = new Son();
s.education();

//Difference between MOverloading & Method Overring


//MOverloading                                             //Method Overring
//1. MOverloading always happened in single class          //1. Method Overriding always happended in parent and child class
//2. MOverloading same name & with differnet parameter     //2. MOverloading same name & same parameter
//3. MOverloading implemenation we have to provided        //3. Method Overriding Implemention of same method
//  after method decleation                                     declwared in a child class