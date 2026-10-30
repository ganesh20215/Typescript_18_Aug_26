

//Tuples
//1. The number of elements is fixed.
//2. The data type of each element is predefined.
//3. element are store in a specific order.
//4. 

//Tuple Declearation
// let student : [number, string] = [1, "Rakesh"];
// console.log(student);

//Tuple declaration with different data type
// let student : [number, string, boolean] = [1, "Rakesh",  true];
// console.log(student);

//Modify Tuple
// let student : [number, string, boolean] = [1, "Rakesh",  true];
// student[1] = "Anuj";
// console.log(student);

//Optinal Tuple Element
// let student : [number, string, boolean?] = [1, "Rakesh"];
// console.log(student);


//private Tuple Element
// let student : readonly [number, string, boolean] = [1, "Rakesh", true];
// student[1] = "Anuj";
// console.log(student);


//Rest Element in tuple [...number[]]
//we have to use ...number[]
// let studentMarks : [number, string, ...number[]] = [1, "Rakesh", 40, 50, 60, 70, 60, 40, 35, 77];
// console.log(studentMarks);


//Difference between Array and Tuple
//Array                                                   //Tuple
//1. variable length                                      //Fixed in length
//2. Same type for all elements                           //Different datatype
//3. Order doesn't matter                                 //Order is vary important
//4. Type safty is vary less                              //Type safty is very more    