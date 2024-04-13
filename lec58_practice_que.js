// Q1 -> arrow function that returns square of number n
let square=(n)=>(n*n);
console.log(square(10));

// Q2->function print "hello world" 5 times at interval of 2s each
function print(){
    let id=setInterval(() => {
        console.log("Hello World");
    }, 2000);
    setTimeout(()=>{
        clearInterval(id);
    },10000);  // after 10s clear interval so that setInterval stops
}
print();