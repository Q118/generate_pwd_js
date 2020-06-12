/** @format */

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    //asking for length, adding Number b/c prompt returns a string and this will make it a number.
	var length = Number(prompt(
		"How many characters would you like your password to contain?"
	));

	if (length > 8 && length < 128) {
        //asking for character types
		var special = confirm("Click OK to include special characters.");
	    var numeric = confirm("Click OK to include numeric characters.");
        var lowerCase = confirm("Click OK to include lower-case characters.");
        var upperCase = confirm("Click OK to include upper-case characters.");
    //looking at user input
        var charSet = "";
        if(special) {
            charSet = " !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
        }
        if(numeric) {
            charSet = "0123456789";
        }
        if(lowerCase) {
            charSet = "abcdefghijklmnopqrstuvwxyz";
        }
        if(upperCase) {
            charSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        }
        









	 else if (length < 8 || length > 128) {
		alert("Please choose a number between 8 and 128!");
	} else {
		alert("Please choose a number between 8 and 128!");
	}

	//var password = generatePassword();
	//var passwordText = document.querySelector("#password");

	//passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);