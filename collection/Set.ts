
//Set
//1. Set is a collection of unique value
//2. It always store elements without duplicates
//3. Typescript as it is uses Javascript build-in set object.

//Set Declaration
// let employees : Set<String> = new Set();
// employees.add('Maulika');
// employees.add('Anisa');
// employees.add('Vivek');
// employees.add('Maulika');
// employees.add('Aman');
// employees.add('Ali');

// console.log(employees);

//Optimized Way
// let employees : Set<String> = new Set(['Maulika', 'Anisa', 'Vivek', 'Maulika', 'Aman']);
// console.log(employees);


//Delete Method
// let employees : Set<String> = new Set(['Maulika', 'Anisa', 'Vivek', 'Maulika', 'Aman']);
// employees.delete('Vivek');
// console.log(employees);

//has method : Return boolean value and it check whether the value is avaialble or not in set
// let employees : Set<String> = new Set(['Maulika', 'Anisa', 'Vivek', 'Maulika', 'Aman']);
// console.log(employees.has('Radhika'));

//size 
let employees : Set<String> = new Set(['Maulika', 'Anisa', 'Vivek', 'Maulika', 'Aman']);
//console.log(employees.size);

for(let value of employees){
    console.log(value);
}

