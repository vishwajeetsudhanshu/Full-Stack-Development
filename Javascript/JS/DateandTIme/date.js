let mydate=new Date()
console.log(mydate.toString());
console.log(mydate.toDateString());
console.log(mydate.toISOString());
console.log(mydate.toJSON());
console.log(mydate.toLocaleDateString());
console.log(mydate.toLocaleString());

console.log(typeof mydate);//object
let myCreatedDate=new Date(2026,0,23)
console.log(myCreatedDate.toLocaleString())
let myCreatedDate2=new Date(2026,1,3,4,30)
console.log(myCreatedDate2.toLocaleString())
let myCreatedDate3=new Date("2026-02-03")


let mytimestamp=Date.now()
console.log(mytimestamp);
console.log(myCreatedDate.getTime())
console.log(Math.floor(Date.now()/1000))

let newDate= new Date()
console.log(newDate);
console.log(newDate.getMonth);
console.log(newDate.getDay);

newDate.toLocaleString('default',{
    weekday:"long",
    timeZone:''
})




