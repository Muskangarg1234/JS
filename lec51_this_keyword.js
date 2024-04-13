const student={
    name: "Muskan",
    age: 19,
    eng: 92,
    math: 99,
    phy: 95,
    getAvg(){
        console.log(this); // complete student object printed
        let avg=(this.eng+this.math+this.phy)/3; // other object can also be used in place of this if they have eng, math,phy as key 
        console.log(`${this.name} got average= ${avg}`);
    }
}
student.getAvg();
console.log(this); // window object printed