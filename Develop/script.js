// Assignment Code
var generateBtn = document.querySelector("#generate");
var ansPasswordLength = prompt("How long do you want your password to be? You may chose a lenght of at Least 8 but no more than 128.");
  var passwordLength = parseInt(ansPasswordLength);
  verifyPasswordLength(passwordLength);

  function verifyPasswordLength(length){
    for (var i = 0; i < 3; i++ ){
      if (length < 8){
        alert("Password length must be at least 8 charachters!");
        var length = prompt("Please enter a password lenght between 8 and 128");
      }else if  (length > 128){
        alert("Password length can be no longer than 128 charachters!");
        var newPasswordLength = prompt("Please enter a password lenght between 8 and 128");
      }else{
        return length;
      }
      parseInt(newPasswordLength);
      return newPasswordLength;
    };
  }
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  var alphabetLCOptions = ["a", "b", "c", "d","e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
  var alphabetUCOptions = ["A", "B", "C", "D","E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
  var numericOptions = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
  var specialChars = ["!", "#", "$", "%", "&", "*", "+" , "-", "/", "<", "?", "@", "[", "|"]
  // var passwordMinLimit = 8
  // var passwordMaxLimit = 128
  
  
  
  
  
  
  // Verify the lenght of the password requested is between 8 and 128 characters
 
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
