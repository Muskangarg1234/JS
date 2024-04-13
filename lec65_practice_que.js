// check if all numbers of array are multiples of 10
let arr=[20,30,40,10];
let res=arr.every(el=>el%10==0);
console.log(res);

// create a function to find the min number in array
let nums=[2,3,10,-4,8,1];
function find_min(nums){
    let min=nums.reduce((res,el)=>{
        if(el<res){
            return el;
        }
        return res;
    });
    console.log(min);
}
find_min(nums);