

//this keyword
//1. this keyword refers to the current object instance


class  DemoTestExample {
    no1 : number = 10;
    no2 : number = 20;
    name : string;
    constructor(name : string){
        this.name = name;
    }

    //this keyword with method
    show(){
        console.log(this.no1 + this.no2);
    }
}

let d = new DemoTestExample("Neha");
// console.log(d.name);
d.show();