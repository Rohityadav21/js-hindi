const myArray = [0,1,2,3,4,5]
const myHeros = ["shaktiman", "chotadon"]

console.log(myArray[3]);

//arrays method 

myArray.push(9)    //add the value 
myArray.pop()     //remove last valye 
console.log(myArray);

myArray.unshift(9)  //ad in the starting of array
myArray.shift() 
console.log(myArray);
console.log(myArray.indexOf(5));

const newArray = myArray.join() //convert the array ino the string
console.log(myArray);
console.log(newArray);


//slice,splice  slice() is used to extract parts of an array without modifying it,
// whereas splice() is used to change the content of an array by removing, replacing, or adding elements.

console.log("A", myArray);

const myn1 = myArray.slice(1, 3)
console.log("B", myArray);
console.log(myn1);


const myn2 = myArray.splice(1, 3)
console.log("c", myArray);
console.log(myn2);


