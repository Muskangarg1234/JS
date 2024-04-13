let h1=document.querySelector("h1");

// we want after 1 second color of h1 changes to red and then after 1 second of becoming red color of h1 change to orange and then after 1 second of becoming orange color of h1 change to green. 

// this way is not recommended bcoz baar baar next time nikalana padta hai i.e like 2sec & 3sec
// setTimeout(()=>{
//     h1.style.color="red";
// },1000);

// setTimeout(()=>{
//     h1.style.color="orange";
// },2000);

// setTimeout(()=>{
//     h1.style.color="green";
// },3000);

// correct way

function changeColor(color,delay,nextColorChange){
    setTimeout(()=>{
        h1.style.color=color;
        if(nextColorChange){ // if next color is present then go inside if ,otherwise not 
            nextColorChange();
        }
    },delay);
}

// jb color red ho jayega i.e usme koi error nahi error hoga only then color green hoga and similarly for all nesting. (this we much do in when we add database ki pehli ist row jb tak add nhi hogi tb tk second row add nhi ho sakti)

// this is callback nesting and this phenomenon called as callback hell.
changeColor("red",1000,function(){
    changeColor("orange",1000,function(){ // yaha callbacks mein nesting ho rhi hai
        changeColor('green',1000,function(){
            changeColor("pink",1000);
        });
    });
});