// find sum of all elements of array
let nums=[2,4,6,10];
let sum=nums.reduce(function(res,el){
    // console.log(res);
    return res+el;
});
console.log(sum);

// find product of all elements of array
let arr=[1,2,3,4,5];
let prod=arr.reduce((res,el)=>res*el);
console.log(prod);

// find maximum in an array using reduce method
arr=[5,1,2,10,3,6,20,30,40,2,1,9];
let max=arr.reduce((res,el)=>{
    if(el>res){
        return el;
    }
    else{
        return res;
    }
});
console.log(max);