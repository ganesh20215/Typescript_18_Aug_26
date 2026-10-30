

//String 
//String is sequesnce of charatcer used to represnt any text.
//We can decleared our string in 3 ways.
//1. Double Quote
//2. Single Quote
//3. Backticks


//1. Double Quote
// let nameTest : string = "Nidhi";
// console.log(nameTest);

//2. Single Quote
// let nameTest : string = 'Nidhi';
// console.log(nameTest);

//3. Backticks
// let nameTest : string = `Nidhi`;
// console.log("Hello All, My name is ${nameTest}. I am attending lectures regularly");

//String is an immutable, Meaning is we can't change the string after creation.
// let nameTest : string = "Nidhi";
// nameTest = "Payal";
// console.log(nameTest);


//String Object
// let checkTestName : String = new String("Joydeep");
// console.log(checkTestName);


//String Methods
//concate() : Combining two or more strings.
// let s1 : string = "Maulika";
// let s2 : string = "Radhika";
// const result = s1.concat(s2);
// console.log(result);

//legnth : To fetch size of string
// let s1 : string = "Maulika";
// let s2 : string = "Radhika";
// console.log(s1.length);

//toUpperCase() & toLowerCase()
//legnth : To fetch size of string
// let s1 : string = "Maulika";
// let s2 : string = "Radhika";
// console.log(s1.toLowerCase());
// console.log(s2.toUpperCase());

//charAt() : return character at specific index.
// let s1 : string = "Maulika";
// let s2 : string = "Radhika";
// console.log(s1.charAt(7));

//indexOf() : Returns first occerence of character
// let s1 : string = "Maulika";
// console.log(s1.indexOf('j'));

//lastIndexOf() : Returns last occerence of character
// let s1 : string = "Maulika";
// console.log(s1.lastIndexOf('a'));

//startsWith() : Check the begining of string & it will always return you value in true/false
// let s1 : string = "Maulika";
// console.log(s1.startsWith("ika"));

//endsWith() : Check the ending of string & it will always return you value in true/false
// let s1 : string = "Maulika";
// console.log(s1.endsWith("Mau"));

//replace() : It is replacing first matching value
// let s1 : string = "Maulika";
// console.log(s1.replace("a", "Anuj"));

//replaceAll() : It is replacing all matching value
// let s1 : string = "Maulika";
// console.log(s1.replaceAll("a", "Anuj"));

//substring() : Extract part of string
// let s1 : string = "Maulika";
// console.log(s1.substring(0, 3));

//slice() : Extract portion of string
// let s1 : string = "Maulika";
// console.log(s1.slice(0, 5));

//split() : brake the string and converts string into an array
// let s1 : string = "Nidhi idj Malhotra";
// let arr = s1.split("i");
// console.log(arr);

//trim() : remove speces before and after string
// let s1 : string = "       Nidhi Malhotra            ";
// console.log(s1);
// console.log("After Trim");
// console.log(s1.trim());


//print prime number from 1 to 100

for (let no = 2; no <= 100; no++){
    let primeNumber = true;
    for (let i = 2; i <no; i++){
        if (no % i === 0) {
          primeNumber = false; 
          break;
        }
    }
    if (primeNumber) {
        console.log(no);
    }
}
