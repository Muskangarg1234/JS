// Q1
let arrayAverage = (arr) => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
    }
    let avg = sum / arr.length;
    return avg;
}
let arr = [1, 3, 10, 2, 4, 5];
console.log(arrayAverage(arr));

// Q2
let isEven = (n) => {
    if (n % 2 == 0) {
        return "even";
    }
    else {
        return "odd";
    }
}
console.log(isEven(20));

// Q3
const object = {
    message: 'Hello,World!',
    logMessage() {
        console.log(this);
        console.log(this.message);
    }
};
setTimeout(object.logMessage, 1000);  // undefined bcoz this-> window object bcoz this line means setTimeout(function(){console.log(this);}, 1000); 


// Q4
let length=4;
function callback(){
    console.log(this.length); // Window object is calling callback function so this-> window and window.length=0 so output=0
}
const objectt={
    length:5,
    method(callback){
        callback();
    }
};
objectt.method(callback,1,2);



// Modified form of Q4


// let length = 4;
// callback = () => {
//     console.log(this);  // this-> window object bcoz callback ko call window object kr raha hai and callback function ka parent window hai and window object ko window object hi call krega
//     console.log(this.length);  // Output=0 bcoz window.length=0
// }
// const objectt = {
//     length: 5,
//     fun() {
//        callback();
//     }
// };
// objectt.fun();


