// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
	var generatePassword = ["Must Have Uppercase", "Must Have Lower Case", "Must Have Symbol","Must Have Number"]
	// For Loop With Password Criteria
	for (var i = 0; i < generatePassword.length; i++)
		console.log(generatePassword[i]);
	// For Loop With Password Criteria
	var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
