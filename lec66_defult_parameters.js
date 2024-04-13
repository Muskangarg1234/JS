function sum(a,b=2){
    return a+b;
}
console.log(sum(2,9)); // a=2 and b=9 so output=2+9=11
console.log(sum(1)); // a=1 and b=2(bcoz b ki value not pass so b set to default value i.e 2) so output=1+2=3

function sum2(a=2,b){
    return a+b;
}
console.log(sum2(2,9)); // a=2 and b=9 so output=2+9=11
console.log(sum2(1)); // a=1 and b=undefined so 1+undefined results NaN so output=NaN