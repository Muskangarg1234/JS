let nums=[2,4,1,5,6,2,7,8,9];
// even array to store even numbers 
let even=nums.filter((num)=>{
    return num%2==0;
});
console.log(even);

// odd array to store odd numbers
let odd=nums.filter((num)=>{
    return num%2!=0;
});
console.log(odd);

// array to store numbers greater than 5
let arr=nums.filter(function(el){
    return el>5;
});
console.log(arr);