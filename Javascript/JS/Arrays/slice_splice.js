const myArr=[2,1,2,8,5,6,2,8,0]
//slice
console.log("A",myArr);
const myn1=myArr.slice(1,3)
console.log(myn1)
console.log("B",myArr);

const myn2=myArr.splice(1,3)
console.log(myn2)
console.log("C",myArr);
//Slice do not manipulate in the original array and it also not include the last range
//where splice use to manipulate in th eoriginal arrya na d it include the range and use to remove from the original array
//C is the example