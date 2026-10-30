

//In TypeScript, import and export are used to share code between files (modules).

//Exporting
//You can export variables, functions, classes, interfaces, etc.

export let no : number = 300;
export let nameTest : string = "Sameer";

export function add() {
    console.log(10 + 20);
}


//Default Export
//Each file can have exactly one default export, which represents 
// the main fallback value of that module.

export default function multi() {
    console.log(2 * 2);
}