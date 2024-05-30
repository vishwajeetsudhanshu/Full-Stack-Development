let std=["Aman","Ananad","rajat"];
console.log("Array student",std);
let nums=[2,4,6,9];
console.log("At zero index nums[0]",nums[0]);
console.log("length of num nums.length",nums.length);
//mixed array
let info=["shardha",65,45,2.5];
console.log(info)
let emparr=[];
console.log(emparr);
//to acces character
console.log(info[0][0]);
console.log("length of first array",info[0].length);
//Array are mutable
let fruits=["mango","apple","litchi"];
fruits[0]="Banana";
console.log(fruits);
fruits[15]="papaya";
console.log(fruits);
//Array Methods
//push
let car=["Audi","Maruti","Bmw"];
car.push("Toyoto");
console.log("After push",car);
car.pop();
console.log("After pop",car);
console.log(car);
car.unshift("Lambo");
console.log("After unShift",car);
car.shift();
console.log("After shift",car);

