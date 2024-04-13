// Q1-> create a function that return sum of numbers from 1 to n
function get_sum(n){
    let sum=0;
    for(let i=1;i<=n;i++){
        sum=sum+i;
    }
    return sum;
    // let sum;
    // sum=(n*(n+1))/2;
    // return sum;
}

console.log(`Sum from 1 to 20 is ${get_sum(20)}`);

// Q2-> create a function that returns the concatenation of all strings in an array
function concat(arr){
    let con="";
    for(let i=0;i<arr.length;i++){
        con=con+arr[i];
    }
    return con;
}
let str=["muskan"," garg"," and"," yugam"," gupta"]
console.log(concat(str));