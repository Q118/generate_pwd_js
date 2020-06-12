/** @format */

// Assignment Code to the generate button
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
	//asking for length, adding Number b/c prompt returns a string and this will make it a number.
	var length = Number(
		prompt("How many characters would you like your password to contain?")
	);

	if (length > 8 && length < 128) {
		//asking for character types
		var special = confirm("Click OK to include special characters.");
		var numeric = confirm("Click OK to include numeric characters.");
		var lowerCase = confirm("Click OK to include lower-case characters.");
		var upperCase = confirm("Click OK to include upper-case characters.");
		//looking at user input, differnet possibilities for combinations of answers being true or false for each parameter
		var charSet = "";
		if (special && numeric && lowerCase && upperCase) {
			charSet =
				" !\"#$%&'()*+,-./:;<=>?@[]^_`{|}~0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
		} else if (special && numeric && lowerCase) {
			charSet =
				" !\"#$%&'()*+,-./:;<=>?@[]^_`{|}~0123456789abcdefghijklmnopqrstuvwxyz";
		} else if (special && numeric && upperCase) {
			charSet =
				" !\"#$%&'()*+,-./:;<=>?@[]^_`{|}~0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
		} else if (special && lowerCase && upperCase) {
			charSet =
				" !\"#$%&'()*+,-./:;<=>?@[]^_`{|}~abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
		} else if (numeric && lowerCase && upperCase) {
			charSet =
				"0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
		} else if (special && numeric) {
			charSet = " !\"#$%&'()*+,-./:;<=>?@[]^_`{|}~0123456789";
		} else if (special && lowerCase) {
			charSet = " !\"#$%&'()*+,-./:;<=>?@[]^_`{|}~abcdefghijklmnopqrstuvwxyz";
		} else if (special && upperCase) {
			charSet = " !\"#$%&'()*+,-./:;<=>?@[]^_`{|}~ABCDEFGHIJKLMNOPQRSTUVWXYZ";
		} else if (numeric && lowerCase) {
			charSet = "0123456789abcdefghijklmnopqrstuvwxyz";
		} else if (numeric && upperCase) {
			charSet = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
		} else if (lowerCase && upperCase) {
			charSet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
		} else if (special) {
			charSet = " !\"#$%&'()*+,-./:;<=>?@[]^_`{|}~";
		} else if (numeric) {
			charSet = "0123456789";
		} else if (lowerCase) {
			charSet = "abcdefghijklmnopqrstuvwxyz";
		} else if (upperCase) {
			charSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
		}

		//returning generated password
		var password = "";
		for (var i = 0; i < length; i++) {
			//picking a character with-in charSet at index of random number using charAt, adding characters into string until gets up to amount user inputted.
			password =
				password + charSet.charAt(Math.floor(Math.random() * charSet.length));
		}
	} else {
		alert("Please choose a number between 8 and 128!");
	}

	var passwordText = document.querySelector("#password");

	passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
