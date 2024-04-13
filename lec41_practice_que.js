// function to calculate average of 3 numbers
function average(a,b,c){
    let avg=(a+b+c)/3;
    console.log(`Average of ${a},${b},${c} is ${avg}.`);
}
average(10,16,10);

// function that prints multiplication table of a number
function table(n){
    for(let i=1;i<=10;i++){
        console.log(`${n} X ${i} = ${n*i}`);
    }
}
let num=prompt("Enter number");
table(num);
