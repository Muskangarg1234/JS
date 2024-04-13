let students=["muskan","yugam","alisha"];
console.log(students);
console.log(students[1]);
console.log(students[10]);
console.log(students.length);
console.log(typeof students);
let marks=[99,95,100,89];
let info=["muskan",25,9.8];  // name age grade
console.log(info[0][2]);
console.log(info[0].length);


console.log([1,2,3,4].length)

let empArr=[];
console.log(empArr.length);
console.log(empArr[0]);

// arrays are mutable in JS
let fruits=["mango","banana","litchi"];
console.log("Before change: ", fruits);
fruits[0]="apple";
console.log("After change: ", fruits);
fruits[0][1]="i";  // strings are immutable so no change come in string
console.log("After change: ", fruits);
fruits[10]="papaya";
console.log("After change: ", fruits);
console.log(fruits[5]);