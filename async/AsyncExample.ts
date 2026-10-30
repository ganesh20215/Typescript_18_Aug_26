

//Without Async Programming
// console.log("Fetching Data...");
// const start = Date.now();
// while (Date.now() - start < 5000) {
    
// }
// console.log("Data Receieved.. ");


//  function fetchData() : Promise<string> {
//     return new Promise((Rejected) =>{
//         setTimeout(() =>{
//             Rejected("User Data");
//         }, 3000);
//     });
// }

// fetchData()
// .then(data =>console.log(data));

async function testData() : Promise<string> {
    console.log("Fetch Data....");

    await new Promise(resolve => setTimeout(resolve, 5000));

    return "Data Recieved...."
}

async function demo() {
    console.log("Test is started....");

    const data  = await testData();

    console.log("Test Completed..");
}

demo();