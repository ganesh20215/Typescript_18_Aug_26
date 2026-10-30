
//Map
//Map stores data as Key-Value pairs & Similar to Java HashMap.
//Unlike objects, a Map can use any data type as a key (string, number, object, function, etc.).
//We can add duplicate value in Map
//We can't add duplicate key in map

let students  = new Map<number, string>();
students.set(1, "Aman");
students.set(2, "Payal");
students.set(2, "Neha");
students.set(4, "Aman");
students.set(5, "Vikram");

//console.log(students);

//get specific value
// console.log(students.get(5));

//has() : check key
// console.log(students.has(10));

//delete() : when we have to delete specific data that time delete method we can use
// students.delete(4);
// console.log(students);

//size : Get the size of map
// console.log(students.size);

for(let [id, name] of students){
    console.log(id, name);
}