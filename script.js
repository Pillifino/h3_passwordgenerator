// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


function generatePassword() {
// Object That Contains Character Types
var buildPassword = {
	passwordLength: "",
	upperLetters: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
	lowerLetters: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
	numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
	symbols: ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '+', '-', '.', '~', '|', '<', '>', '=', '-', '_', '/', ':', ';', '?', '[', ']', '{', '}', '~']
}

// Choose Character Types To Be Added Into
var chosenLength = prompt("Password Length?")
var isUpper = confirm("Uppercases?")
var isLower = confirm("Lowercases?")
var isNumbers = confirm("Numbers?")
var isSymbols = confirm("symbols?")
var passwordarray = [] //use this variable to push the chosen character types into one variable
var potentialCharacters = []
// Set rules on password length
	while (chosenLength < 8 || chosenLength >128){
		chosenLength = prompt("Must be between 8 and 128 characters")
	}
// Choose Random index for each character type
	if (isUpper === true){
	for (var i = 0; i < 1; i++) {
		console.log(
			passwordarray.push(buildPassword.upperLetters[Math.floor(Math.random() * buildPassword.upperLetters.length)])
			);
	}
}
	if (isLower === true){
	for (var i = 0; i < 1; i++) {
		console.log(
			passwordarray.push(buildPassword.lowerLetters[Math.floor(Math.random() * buildPassword.lowerLetters.length)])
			); 
		console.log(passwordarray)
	}
}
	if (isNumbers === true){
	for (var i = 0; i < 1; i++) {
		console.log(
			passwordarray.push(buildPassword.numbers[Math.floor(Math.random() * buildPassword.numbers.length)])
			);
			console.log(passwordarray)
	}
}
	if (isSymbols === true){
	for (var i = 0; i < 1; i++) {
		console.log(
			passwordarray.push(buildPassword.symbols[Math.floor(Math.random() * buildPassword.symbols.length)])
			);
			console.log(passwordarray)
			console.log(potentialCharacters = potentialCharacters.concat(buildPassword.symbols))
	}  
	// subract chosen character array length from length chose by user
	var trueLength = chosenLength - passwordarray.length
	for (var i = 0; i < trueLength; i++){
		var randomIndex = Math.floor(Math.random() * potentialCharacters.length)
		passwordarray.push(potentialCharacters[randomIndex])
	}
	var finalPassword = passwordarray.join('');
	return finalPassword
}
}
