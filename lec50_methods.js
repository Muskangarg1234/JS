// const calculator={
//     num:155,
//     add:function(a,b){
//         return a+b;
//     },
//     sub:function(a,b){
//         return a-b;
//     },
//     mult:function(a,b){
//         return a*b;
//     }
// };

// Methods shorthand
const calculator={
    num:155,
    add(a,b){
        return a+b;
    },
    sub(a,b){
        return a-b;
    },
    mult(a,b){
        return a*b;
    }
};
console.log(calculator.num);
console.log(calculator.add(2,3));
console.log(calculator.sub(2,3));
console.log(calculator.mult(2,3));