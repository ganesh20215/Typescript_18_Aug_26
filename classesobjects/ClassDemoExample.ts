

class Student {
    
    //When we declared any variable inside class then that variable known as property
    //we should not declared any property with var, let & const keyword
    studentName : string = "Neha";

    // In TypeScript, methods are functions defined inside a class, interface, or object. 
    // They are used to perform actions on the data of that class or object

    mishra():void{
        console.log("Hello Everyone.. Good Evening..");
    }

    test(a : number, b : number):void{
        console.log(a + b);
    } 

    substraction(a : number, b : number) : number{
        return a - b;
    }

}

//Object
//Objects represent real time entity
//Object always we have to create from class
//Objects always we have to create with a new keyword


//Methods in Typescript

const anuj = new Student();
console.log(anuj.studentName);
anuj.mishra();
anuj.test(20, 30)