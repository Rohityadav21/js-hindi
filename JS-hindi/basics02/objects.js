// singleton
//object literals
const JsUser = {
    name: "hitesh",
    age : 18,
    location: "jaipur",
    mySym : "mykey1",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["monday", "saturday"]

}

console.log(JsUser.email);
console.log(JsUser["name"]);
console.log(typeof JsUser.mySym);

JsUser.email = "hitesh@chatgpt.coim"
//Object.freeze(JsUser)
JsUser.email = "hitesh@microsoft.com"
console.log(JsUser);


JsUser.greeting = function(){
    console.log("hello world");
}
console.log(JsUser,greeting());
