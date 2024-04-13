// Example 1
// function calSum(a,b){
//     let sum=a+b;  // function scope
//     console.log(sum);
// }
// calSum(1,2);
// console.log(sum);  // this gives error bcoz sum define as function scope variable

// Example 2
let sum=54;  // Global Scope
function calSum(a,b){
    let sum=a+b; // Function scope
    console.log(sum);
}
calSum(1,2);
console.log(sum);