const accountId = 12345
let accountEmail = "Hitesh@gmail.com"
var accountPassword = "65432"
accountCity = "jaipur"

// accountId = 2 // not found 

/* 
prefer not to use var
because of issue in block spope and functional scope
use only const and let
agar java script mai haam loog variable declare krke choad deta 
hai toa aur value nhi deta toa uska andr undefined atta hai
*/

accountEmail = "hd@jf.com"
accountPassword = "23623423424"
accountCity = "bengaluru"

console.log(accountId);

console.table([accountId, accountEmail, accountPassword, accountCity])
/* here we use the console table for collecting the data in a table form 
   if we use console log then for the output then we have to write it again and again
   for the different objects */