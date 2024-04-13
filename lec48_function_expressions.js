const sum=function(a,b){
    return a+b;
}
console.log(sum(2,8));   

let hello=function(){
    console.log("Hello");
}
hello();

hello=function(){ // hello variable updated with new function
    console.log("namaste");
}
hello();