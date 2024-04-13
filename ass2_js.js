// Q1
let arr=[7,9,0,-2,10,20,30];
let n=5;
console.log(arr.slice(0,n));

// Q2
console.log(arr);
console.log(arr.slice(arr.length-n));
// console.log(arr.slice(-n));  // valid answer

// Q3
let str="";
if(str.length==0){
    console.log("String is Blank");
}
else{
    console.log("String is not empty")
}

// Q4
str="muskan";
let index=2;
// if(str[index]>='a' && str[index]<='z'){
//     console.log("Character at this index is lowercase");
// }
// else{
//     console.log("Character at this index is uppercase");
// }

// other method
if(str[index].toLowerCase()===str[index]){
    console.log(`The character ${str[index]} has a lower case`);
}
else{
    console.log(`The character ${str[index]} has a upper case`);
}


// Q5
str="    muskan   ";
str=str.trim()
console.log(`string after strip leading and trailing spaces is ${str}`);

// Q6
arr=[10,20,"hello",15,60,"bye"];
let element="hello";
index=arr.indexOf(element);
if(index!=-1){
    console.log(`${element} is present in array at index ${index}`);
}
else{
    console.log(`${element} is not present in array bcoz index is ${index}`)
}