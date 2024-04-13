// array
let arr=[1,2,3,4,5];
let newArr=[...arr];
console.log(newArr);
newArr.push(6);
console.log(newArr);
console.log(arr);  // old arr will not change


// string 
let chars=[..."hello"];
console.log(chars);

let str="muskan";
let char=[...str];
console.log(char);


// Array combine
let odd=[1,3,5,7,9];
let even=[2,4,6,8,10];
let nums=[...odd,...even];
console.log(nums);

let nums2=[...even,...odd];
console.log(nums2);