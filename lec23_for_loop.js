// forward loop
console.log("Forward counting:");
for(let i=1;i<=10;i++){
    console.log(i);
}
//console.log(i);  // give an error

// backward loop
console.log("Backward counting:");
for(i=10;i>=1;i--){
    console.log(i);
}
console.log(i);  // don't give error bcoz we don't use let in loop

