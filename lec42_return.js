// return without arguments
function fun_name(){
    return 1;
}
// let num=fun_name();
// console.log(num);

console.log(fun_name());

// fun_name() alone not prints anything on console it just store value 1

function sum(a,b){
   return a+b; 
}
console.log(`Sum of 1 and 2 is ${sum(1,2)}`);

console.log(`Sum of 1,2,3 is ${sum(sum(1,2),3)}`);

function check_adult(age){
    if(age>=18){
        return "adult";
    }
    else{
        return "not adult";
    }
    console.log("Bye Bye");  // this code will never exexutes bcoz function alreay return and after return function stops its execution.    
}
console.log(check_adult(20));