let myDate = new Date()
console.log(myDate.toString());  //used for getiing all the details 
console.log(myDate.toDateString());  //used for getting day date time
console.log(myDate.toLocaleString()); //used for getiing local time and date 
console.log(typeof myDate);

let myCreatedDate = new Date(2023, 0, 23)
let CreatedDate = new Date("2023-01-23")
let Created = new Date("03-01-2023")
console.log(myCreatedDate.toDateString());
console.log(CreatedDate.toDateString());
console.log(Created.toDateString());


let myTime = Date.now()

console.log(myTime);

console.log(Math.floor(Date.now()/1000));