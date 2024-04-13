const arr=[1,2,3];
console.log(arr);
arr.push(10);  // this is valid even in constant array
arr.pop();  // this is valid even in constant array
arr.reverse();  // this is valid even in constant array
console.log(arr);
arr=[10,20];  // this is not valid in constant array