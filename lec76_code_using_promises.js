function saveToDB(data) {
    return new Promise((resolve, reject) => {
        let internetSpeed = Math.floor(Math.random() * 10) + 1;
        if (internetSpeed > 4) {
            resolve("Success: Data saved");
        }
        else {
            reject("Failure: Weak connection");
        }
    });
}

// let return_val=saveToDB("Hello world");
// return_val.then(()=>{
//     console.log("Promise resolved");
//     console.log(return_val);  // we can print returned promise object also
// })
// .catch(()=>{
//     console.log("Promise rejected");
// });

saveToDB("Hello world")
.then(()=>{
    console.log("Promise resolved");
})
.catch(()=>{
    console.log("Promise rejected");
});
