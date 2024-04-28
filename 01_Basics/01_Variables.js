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

    1.Variables declared with the var always have Global Scope.

    2.Variables declared with the var keyword can NOT have block scope:

    e.g.
            {
                 var x = 2;
            }
            // x CAN be used here
*/

/*
    1.Variables declared with let have Block Scope

    2.Variables declared with let must be Declared before use

    3.Variables declared with let cannot be Redeclared in the same scope

    e.g.
            {
                let x = 2;
            }
            // x CANNOT be used here
 */