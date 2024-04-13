let fruits=["apple","mango","banana","litchi","pear"];
// forward loop
console.log("Elements in given order:");
for(let i=0;i<fruits.length;i++){
    console.log(`Fruit at ${i} index is ${fruits[i]}`);
}
console.log("");
// backward loop
console.log("Elements in reverse order:");
for(let i=fruits.length-1;i>=0;i--){
    console.log(`Fruit at ${i} index is ${fruits[i]}`);
}

// nested array with nested loop
console.log("");
console.log("nested loop");
let arr=[["ironman","spiderman"],["superman","flash","wonder woman"]];
for(let i=0;i<arr.length;i++){
    console.log(`array number ${i+1}`);
    for(let j=0;j<arr[i].length;j++){
        console.log(`at i=${i} and j=${j} element is ${arr[i][j]}`);
    }
}
