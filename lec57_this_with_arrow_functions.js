const student={
    name:"muskan",
    age:19,
    var: this,  // this hai voh student object mein likha hai and student object ko kon call kr raha hai?-> window object call kr raha hai so this -> window object
    // this-> window object bcoz ye global scope hai 
    fun(){
        return this;  // this-> calling object and if student object calls then "this" equals to student
    },
    getName(){
        console.log(this); // student (bcoz normal function -> calling object)
        return this.name;
    },
    getAge:()=>{
        console.log(this); // window ( bcoz arrow function -> parent ka calling object) student object ko call kr raha hai window object
        return this.age;
    },

    getInfo1(){   
        setTimeout(()=>{
            console.log(this);  // student object 
        },1000);
    },
    getInfo2(){
        setTimeout(function(){
            console.log(this); // window object
        },1000);
    }
};
