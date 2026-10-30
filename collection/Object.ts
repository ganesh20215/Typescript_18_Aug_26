
//Object
//Object in TypeScript is a collection of key-value pairs used to store related data and functionality together. 

// let studnet : {
//     id : number,
//     name : string,
//     location : {
//         city: string,
//         pincode : number
//     }
// }

// studnet = {
//     id : 1,
//     name : 'Rakesh',
//     location : {
//         city : 'Satara',
//         pincode : 411222
//     }
// }

// studnet.name = "Arpit"
// console.log(studnet);


//Collection of objects (Array of Object)
let studnet :{
    id : number,
    name : string,
    location : string
}[] = 
[
    {
        id : 1,
        name : "Laxmi",
        location : "Mumbai"
    },
        {
        id : 2,
        name : "Anuj",
        location : "Delhi"
    },
        {
        id : 3,
        name : "Nitesh",
        location : "Chennai"
    },
        {
        id : 4,
        name : "Radhika",
        location : "Bangluru"
    }
]

console.log(studnet[2].location);