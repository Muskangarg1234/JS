// Q1
let arr=[2,1,9,10,3];
let square=arr.map(function(el){
    return el*el;
});
console.log(square);

let sum=arr.reduce((res,el)=>{
    return res+el;
});
console.log(sum);

let avg=sum/arr.length;
console.log(avg);


// Q2
arr=[3,10,2,1,4];
let newArr=arr.map(function(el){
    return el+5;
});
console.log(newArr);


// Q3
let str=["hello","Bye","hii"];
let newStr=str.map(function(s){
    return s.toUpperCase();
});
console.log(newStr);


// Q4
function doubleAndReturnArgs(arr,...args){
    let double=args.map(function(el){
        return el*2;
    });
    let newArr=[...arr,...double];
    return newArr;
}
console.log(doubleAndReturnArgs([1,2,3],2,4,6,10,20));


// Q5
let student1={
    name:"muskan",
    age:19,
    city:"Bathinda"
};
let student2={
    name:"Yugam",
    age:17,
    city:"Bathinda"
};
function mergeObjects(obj1,obj2){
    let obj={...obj1,...obj2};  // here keys of both objects so value overwrites but objects they are merged
    console.log(obj);
}
mergeObjects(student1,student2);


let obj1={
    a:"b",
    c:"d"
};
let obj2={
    e:"f",
    g:"h"
};
function mergeObjects(obj1,obj2){
    let obj={...obj1,...obj2}; 
    console.log(obj);
}
mergeObjects(obj1,obj2);