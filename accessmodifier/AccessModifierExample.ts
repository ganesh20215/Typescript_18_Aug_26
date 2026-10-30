

//Access Modifier
// Access modifiers are used to control the visibility and accessibility of element.
// In TypeScript, access modifiers control the visibility and accessibility of class members, 
// such as properties and methods, aligning with the principles of encapsulation
//  and information hiding in object-oriented programming.


//1. Public Access Modifier
//The public modifier allows class members to be accessible from anywhere. 
//By default, all class members are public if no access modifier is specified.

//2. Private Access Modifier
//The private modifier restricts access to class members, making them accessible only within the class they are defined. 
//This ensures encapsulation and protects the internal state of the object.


class DemoOfPublic {
//    name : string = "Deepraj";
      private name : string = "Deepraj";

      display(){
        console.log(this.name);
      }
}

let d = new DemoOfPublic();
d.display();

