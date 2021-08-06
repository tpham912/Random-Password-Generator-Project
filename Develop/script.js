// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
// uppercase array 
  var upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l ", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// number arryay 
  var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]

// special characters array 
  var specialCharacters = ["!", "@", "#", "$", "%","^","&", "*"]
  
  var chosenValues = []

  if(window.confirm("Do you want Upper Case?")){
    chosenValues = chosenValues.concat(upper);
  }
   
  if(window.confirm("Do you want Lower Case?")){
    chosenValues = chosenValues.concat(lower);
  }

  if(window.confirm("Do you want Special Characters?")){
    chosenValues = chosenValues.concat(specialCharacters);
  }

  if(window.confirm("Do you want Numbers?")){
    chosenValues = chosenValues.concat(number);
  }

  var passwordLength = window.prompt("Enter password length between 8-128");

  var password = [];

  for(var i=0; i < passwordLength; i++) {  
    var randomIndex = Math.floor(Math.random()*chosenValues.length);
    var randomCharacter = chosenValues[randomIndex];
    password.push(randomCharacter);
  }

return password;

}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value =  password.join("");
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
