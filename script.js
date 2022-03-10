// Assignment Code
// declares arrays for each character set
var generateBtn = document.querySelector("#generate");

var uppercase = ["A", "B","C", "D", "E", "F", "G", "H", "I", "J", "K", "L" ,"M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var symbols = ["~", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", "{", "}", "|", ":", "<", ">", "?", "/", ".", ",", "'", ";", "[", "]", "=", "-"];

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// function that ask the user some question and then gives you a random password
function generatePassword() {
  // declaring an array to keep the character selections in, and a variable to asign the results to
  var passwordArray = [];
  var result = "";
  
// prompt if you do not choose the required password length
var passwordLength = prompt("Choose a password length between 8 and 128.");

// if password is correct length execute code below
if(passwordLength < 8 || passwordLength > 128) {
    alert("Please choose between 8 and 128 characters.");
}

// asks user with confirms what characters they would like to add, then adds that choice to the array
else {
  if(confirm ("Include uppercase characters?")) {
    passwordArray = passwordArray.concat(uppercase);
}

  if(confirm ("Include lowercase characters?")) {
    passwordArray = passwordArray.concat(lowercase);
}

  if(confirm ("Include numbers?")) {
    passwordArray = passwordArray.concat(numbers);
}

  if(confirm ("Include symbols?")) {
    passwordArray = passwordArray.concat(symbols);
}

// for loop iteration to add and randomized the selected characters  
for(var i = 0; i < passwordLength; i++) {
    var random = Math.floor(Math.random()*passwordArray.length);
    result += passwordArray[random];
}

}
// console.log to test results
console.log(result);

//returns the result to the user
return result;
}







