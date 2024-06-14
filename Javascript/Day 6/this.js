const std={

    name:"Sanny",
    age:23,
    eng:85,
    math:85,
    phy:98,
    getAvg(){
        console.log(this);
        let avg=(this.eng+this.math+this.phy)/3;
        console.log(`${this.name} got an avg marks ${avg}`);
    }
}
std.getAvg();
function getAvg(){
    console.log(this);
}