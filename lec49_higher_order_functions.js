// higher order function when we take function as argument

// function greet(){
//     console.log("hello");
// }

// we can define greet using function expression also
let greet=function(){
    console.log("hello");
}

function main(func,n){  // Higher order function bcoz it uses function as argument
    for(let i=1;i<=n;i++){
        func();
    }
}
main(greet,200);

// higher order function when we return  function as output from another function 
function oddEvenFactory(request){
    if(request=="odd"){
        let odd=function(n){
            console.log(!(n%2==0));
        }
        return odd;
    }
    else if(request=="even"){
        // let even=function(n){
        //     console.log(n%2==0);
        // }

        // directly return function
        return function(n){
            console.log(n%2==0);
        };
    }
    else{
        console.log("Wrong request");
    }
}
let func=oddEvenFactory("even");
func(10);
