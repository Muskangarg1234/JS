// Q1-> create a function that return array elements larger than a number
let arr=[2,10,1,9,3,6];
let num=5;
function larger(arr,num){
    let result=[];
    for(let i=0;i<arr.length;i++){
        if(arr[i]>num){
            result.push(arr[i]);
        }
    }
    return result;
}
console.log(larger(arr,num));

// Q2
let str="abcdabcdefgggh";
function unique(str){
    let result="";
    for(let i=0;i<str.length;i++){
        if(result.indexOf(str[i])==-1){
            result+=str[i];
        }
    }
    // for(let i=0;i<str.length;i++){
    //     let j=0;
    //     for(j;j<result.length;j++){
    //         if(result[j]==str[i]){
    //             break;
    //         }
    //     }
    //     if(j==result.length){
    //         result+=str[i];
    //     }
    // }
    return result;
}

console.log(unique(str));

// Q3
let country=["Australia","Germany","United States of America"];
function longest_string(arr){
    let max=0;
    let result;
    for(let i=0;i<arr.length;i++){
        if(arr[i].length>max){
            max=arr[i].length;
            result=arr[i];
        }
    }
    return result;
}

console.log(`Longest country name is ${longest_string(country)}`);

// Q4
let str_argument="muskan";
function count_vowels(str){
    let count=0;
    for(let i=0;i<str.length;i++){
        if(str[i]=='a' || str[i]=='e' || str[i]=='i' || str[i]=='o' || str[i]=='u'){
            count++;
        }
    }
    return count;
}

console.log(`Number of vowels in a string argument is ${count_vowels(str_argument)}`);

// Q5
function random(start,end){
    let random=Math.floor(Math.random()*(end-start+1))+start;
    return random;       
}
console.log(random(2,7));

