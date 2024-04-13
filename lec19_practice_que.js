// Q1: change start=["january","july","march","august"] to final=['july', 'june', 'march', 'august'] using splice
let start=["january","july","march","august"];
// start.splice(0,1);
// start.splice(1,0,"june");
start.splice(0,2,"july","june");
console.log(start);


// Q2:
let lang=["c","c++","html","javascript","python","java","c#","sql"];
// console.log(lang.reverse());
// console.log(lang.indexOf("javascript"));
console.log(lang.reverse().indexOf("javascript")); // using method  chianing