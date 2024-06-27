//const tinderUser = new Object() is a  singleton 

const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "name"
tinderUser.isLoggedIn =  false

// console.log(tinderUser) 
//{ id: '123abc', name: 'name', isLoggedIn: false }

/*const regularUser = {
    email: "hagefib@gmail.com"
    fullname: {
         userfullname:{
            firstname: "hitesh",
            lastname: "yadav",
        }
    }

}

console.log(regularUser.fullname)*/

const object1 = {1: "a", 2: "b"}
const object2 = {3: "a", 4: "b"}
const object4 = {5: "a", 6: "b"}

const object3 = Object.assign({}, object1, object2, object4)
console.log(object3);

const users = [
    {
    },
    {
    },
    {
    },
    {
    },
    {
    },
]

users[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.enteries(tinderUser));
console.log(Object.tinderUser.hasOwnProperty('isLoggedIn'));

