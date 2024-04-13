function print(...args){ 
    for(let i=0;i<args.length;i++){
        console.log("You gave us: ",args[i]);
    }
}
print(1,5,10,20);
console.log("");
print("hello","hii");

// every function has argumnets named collection
function any(){
    console.log(arguments);
    console.log(arguments.length);
    // arguments.push(1);
    // On argument named collection no array method work
    console.log(arguments);
}
any(3,4,5,6);

function sum(...args){  // rest syntax-> ...
    let res=args.reduce((result,el)=>result+el);
    console.log(res);
}
sum(3,1,3,4,1);

function min(...args){
    let res=args.reduce((result,el)=>{
        if(el<result){
            return el;
        }
        return result;
    });
    console.log(res);
}
min(3,1,10,2,-20,-40,100,200);

// even we can pass extra arguments also here
function min_message(msg,...args){
    console.log(msg);
    let res=args.reduce((result,el)=>{
        if(el<result){
            return el;
        }
        return result;
    });
    console.log(res);
}
min_message("hello",3,1,10,2,-20,-40,100,200);