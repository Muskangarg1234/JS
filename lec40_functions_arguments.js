// function to print info of person
function printInfo(name,age){
    console.log(`${name}'s age is ${age}.`);
}
printInfo("Muskan",19);
printInfo("Yugam",17);
printInfo("Aman");
printInfo(23);  // now 23 will be considered as name not age


// function to calculate sum of 2 numbers
function sum(a,b){
    console.log(`Sum of ${a} and ${b} is ${a+b}.`);
}
sum(2,3);
sum(8,2);
sum("Muskan","Garg");