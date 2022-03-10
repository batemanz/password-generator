// Assignment Code
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

// 1. create buckets for each character type



function generatePassword() {
  var passwordArray = [];
  var result = "";
  

var passwordLength = prompt("Choose a password length between 8 and 128.");

if(passwordLength < 8 || passwordLength > 128) {
    alert("Please choose between 8 and 128 characters.");
}

else {
  if(confirm ("Include uppercase characters?")) {
    // Array.prototype.push.apply(passwordArray, uppercase);
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

for(var i = 0; i < passwordLength; i++) {
    var random = Math.floor(Math.random()*passwordArray.length);
    result += passwordArray[random];
}

}
console.log(result);
return result;
}







