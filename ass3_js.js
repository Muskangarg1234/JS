// Q1-> delete all num from arr array
let arr=[3,3,3,3,3,3,3];
let num=3;
let i=0;
while(i<arr.length){
    if(arr[i]==num){
        arr.splice(i,1);
    }
    else{
        i++;
    }
}

console.log(arr);

// Q2-> find number of digits in a number
num=128;
let count=0;
while(num!=0){
    num=num/10;
    num=Math.trunc(num);
    count++;
}
console.log(`Number of digits in number is ${count}`);

// Q3-> sum of digits in a number
num=11285;
sum=0;
while(num!=0){
    sum=sum+num%10;
    num=num/10;
    num=Math.trunc(num);
}
console.log("Sum of digits of a number is ",sum);

// Q4-> factorial of number n
let n=7;
let ans=1;
while(n>0){
    ans=ans*n;
    n--;
}
console.log(`Fcatorial is ${ans}`);

// Q5-> largest number in array with +ve numbers
arr=[300,1,10,20,15,100,25,60,200];
let max=-1;
for(element of arr){
    if(element>max){
        max=element;
    }
}
console.log(`largest number in array is ${max}`);