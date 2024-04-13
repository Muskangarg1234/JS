// example -> save data in database
// now data saving depends on internet connection so we generate random numbers from 1 to 10 which denotes internet speed

// with callback hell

function savetoDB(data,success,failure){
    let internetSpeed=Math.floor(Math.random()*10)+1;
    if(internetSpeed>4){
        success(); // call success function that we pass as a parameter here
    }
    else{
        failure(); // call failure function that we pass as a parameter here
    }
}

// now when ist data save then start saving 2nd data . If 2nd data fail to save then we can't save next data (i. e we have to stop there) Similarly if ist data not save then 2nd data not able to save. create this type of functionality.
savetoDB("muskan",()=>{
    console.log("Data saved successfully");
    // now if this data save then we can save 2nd data also
    savetoDB("hello world",()=>{
        console.log("Data2 saved successfully");
        // now if this data save then we can save 3rd data also
        savetoDB("Good Morning",()=>{
            console.log("Data3 saved successfully");
        },()=>{
            console.log("Weak connection!! Data3 not saved.");
        });
    },()=>{
        console.log("Weak connection!! Data2 not saved.");
    });
},()=>{
    console.log("Weak connection!! Data not saved.");
});