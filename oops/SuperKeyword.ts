
//Super Keyword
//1.The super keyword in TypeScript is used to access members (constructor, methods, properties) of the parent class from the child class.
//2. It is mainly used in Inheritance.

//1. Super() : calling parent constuctor
//2. Super.method() : call parent class method
//3. super.property() : Access Parent class Property

class  Teacher {
    // constructor(collegeName : string) {
    //     console.log("This Government school Teacher " + collegeName);
    // }

    // subject(){
    //     console.log("Teacher is for Automation");
    // }

    teacherName : string = "Nidhi";
}

class Student extends Teacher {
//    constructor(a : string){
//         super(a);
//         console.log("Hello I am a BTech Student..");
//    }

    // display(){
    //     super.subject();
    // }

    show(){
        console.log(this.teacherName);
    }
}

const s = new Student();
s.show();

//this                                          //super
//1. refer current class objectes               //1. refer to the parent class
//2. Access current class property/method       //2. super keyword we can use for parent class method and constructor
//this.name                                     //super.name