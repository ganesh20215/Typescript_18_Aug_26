

//Need of Inheritence
//Inheritence used for avoid code duplication.
//We can achieve inheritence with parent and child releation
//child class can aquired all proerties and methods from parent class
//When we want to make relation between parent and child class that time we have to use extends.
//ParentClass → Base class / Super class 
//ChildClass → Derived class / Sub class 


class Human {
    study(){
        console.log("Study");
    }
    sleep(){
        console.log("sleep");
    }
    eat(){
        console.log("Eating");
    }
}

class Male extends Human{

}

let m = new Male();
m.eat();
m.sleep();
m.study();

class Female extends Human{
   
}

let f = new Female();
f.eat();
f.sleep();
f.study();


class Transgender extends Human{
    
}

let t = new Transgender();
t.eat();
t.sleep();
t.study();
