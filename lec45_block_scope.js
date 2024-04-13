// {
//     let a=5; // Block scope
// }
// console.log(a); 

//-------------------------------------------------------------------------

// {
//     var a=5; // can be accessed anywhere
// }
// console.log(a);

// --------------------------------------------------------------------------------

// {
//     const a=15; // Block scope
// }
// console.log(a);

//----------------------------------------------------------------------------------

// for(let i=1;i<=5;i++){
//     console.log(i);
// }
// console.log(i);  // gives error because block scope

// ----------------------------------------------------------------------------------

let age=20;
if(age>=18){
    let str="adult";  // block scope
    console.log(str); // not gives error bcoz we can use str in block
}
console.log(str);  // gives error bcoz str is defined in block
