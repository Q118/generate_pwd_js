// Assignment Code
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
var length = prompt("How many characters would you like your password to contain?");

var special = confirm("Click OK to include special characters.");

var numeric = confirm("Click OK to include numeric characters.");

var lowerCase = confirm("Click OK to include lower-case characters.");

var upperCase = confirm("Click OK to include upper-case characters.");

if (length > 8 && length < 
//var password = generatePassword();
//var passwordText = document.querySelector("#password");

  //passwordText.value = password;

};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



/*function generatePassword() {
    var length = 8,
        charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
        retVal = "";
    for (var i = 0, n = charset.length; i < length; ++i) {
        retVal += charset.charAt(Math.floor(Math.random() * n));
    }
    return retVal;
} */