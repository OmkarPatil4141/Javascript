const accountID = 4141;

let accountEmail = "omkar@gmail.com";

var accountPassword = "12345";

accountCity = "jaipur";

let accountState;

// accountID = 700; // not allowed as it is declared as constant

accountEmail = "patil@gmail.com";

accountPassword = "54321";

accountCity = 'Kolhapur';

console.table([accountID,accountEmail,accountCity]);

console.log(typeof accountState);


/*
    #prefer not to use var because of issue  of block scope and functional scope
*/