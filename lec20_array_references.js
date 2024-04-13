let arr1=[1,2,3];
let arr2=[1,2,3];
console.log(arr1==arr2); //false bcoz both points to different address only items same
console.log(arr1===arr2);//false bcoz both points to different address only items same
arr1.push(4);
console.log(arr1);
console.log(arr2);

let nums=[1,2,3];
let numscopy=nums; // reference to same address
console.log(nums==numscopy); // true bcoz same address of both arrays
console.log(nums===numscopy); // true bcoz same address of both arrays
nums.push(4);
console.log(nums);
console.log(numscopy);
numscopy.pop();
console.log(nums);
console.log(numscopy);
