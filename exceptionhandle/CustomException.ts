

//Custom Exception : Create your own exceptions
//When we have to define custome execption on statement that time we have to use throw.

class InvalidMarriageAge extends Error {
    constructor(message : string){
        super(message);
    }
}

function courtMarriage(age : number) {
    if (age > 21) {
        console.log("Congratulation. You are eligible for marriage");
    }else{
        throw new InvalidMarriageAge("You are not eligible for marriage. Try Next Year");
    }
}


courtMarriage(20);