let arr=['a','b','c'];
let arrCopy=arr;
console.log("arr==arrCopy",arr==arrCopy);
arr.push('d');
console.log("value of arr after push",arr);
console.log("value of arrCopy after push",arrCopy);
arr.pop();
console.log(arr,arrCopy);