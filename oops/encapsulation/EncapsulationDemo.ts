

//Encapsulation (Data Hiding)
//Wrapping data into the single unit that is known as encapsulation
//Example for this like capsule which contain several medicine
//Encapsulation is an OOP (Object-Oriented Programming) concept that binds data (variables) and methods (functions) together into a single unit (class) and restricts direct access to the data.
//Encapsulation always talk about data hiding
//Whenever we have to access private data member outside of class that time we can use 
// getter and setters method

class DemoOfEncap {
    
    readonly balance : number = 4000;
    private passwords : number;

    constructor(passwords : number){
        this.passwords = passwords;
    }

    public getBalance() : number{
        return this.balance;
    }

    public setPassword(passwords : number) : void{
        this.passwords = passwords;
    }

      public getPassword() : number{
        return this.passwords;
    }
}

const dn = new DemoOfEncap(1234);
console.log(dn.getBalance());
console.log(dn.getPassword());
