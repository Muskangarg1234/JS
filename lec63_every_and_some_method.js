let arr=[2,4,1,6,10,12,8];
// Every method
let ans=arr.every(function(el){
    return el%2==0;
});
console.log(ans); // false bcoz every element is not even

// some method
ans=arr.some(el=> el%2==0); 
console.log(ans); // true bcoz some elements(i.e atleast one element) are even