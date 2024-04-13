let arr=[1,2,3,4,5];
function print(el){
    console.log(el);
}
arr.forEach(print);
//------------------------------------------------------------------------------------
console.log("");
//------------------------------------------------------------------------------------

// directly put function definition in forEach function
arr.forEach(function(el){
    console.log(el);
});

console.log("");

// using arrow function
arr.forEach((el)=>{
    console.log(el);
});

