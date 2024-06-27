//stack(primitive type) and heap (non primitive)

let myyoutubename = "rohit yadav"

let anothername = "myyoutubename"

console.log(anothername);


let userone = {
    email: "user@google.com",
    upi: "user@ybl",
}

let usertwo = userone

usertwo.email = "hites@google.com"

console.log(userone.email);
console.log(usertwo.email);