let data={
    email:"ironman@gmail.com",
    password:"abcd"
};
console.log(data);

let dataCopy={...data,id:123,country:"India"};
console.log(dataCopy);


// Array spreaded into an object
let arr=[10,20,30,40,50];
let obj={...arr};
console.log(obj);


// String spreaded into an object
let obj2={..."hello"};
console.log(obj2);
