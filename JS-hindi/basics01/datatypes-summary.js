//primitive 
//7 types : string, number, boolean, null, symbol, undefined, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;   //undifiend (we use semicomma)

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId)

const bigNumber =23456789n

const heroes = ["saktiman", "naagraj"]; //array
let myObj = {
    name: "hitesh", 
    age: 22,
}
//refernce (Non Primitive)
//Arrays, Objects, Functions

const myfunction = function(){
    console.log("hello world ")
}