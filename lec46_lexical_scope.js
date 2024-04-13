function outerFunc(){
    let x=5;
    let y=6;
    function innerFunc(){
        let a=3;
        console.log(x); // x can be used in innerFunc bcoz outer function variables can be used in inner function
    }
    innerFunc();
    console.log(a); // gives error a is not defined bcoz a defined in innerFunc so can't be accessed outside innerFunc
}
outerFunc();
innerFunc(); // gives error innerFunc is not defined