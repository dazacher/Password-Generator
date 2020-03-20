// Assignment Code
var generateBtn = document.querySelector("#generate");
var ansPasswordLength = prompt("How long do you want your password to be? You may chose a length of at Least 8 but no more than 128.");
var passwordLength = parseInt(ansPasswordLength);
 // var passwordMinLimit = 8
  // var passwordMaxLimit = 128
var generatedPassword

 

verifyPasswordLength(passwordLength);
var password = generatePassword(password, passwordLength);

  // var computerChoice = Math.floor(Math.random() * passwordLength) + 1;
  // Verify the length of the password requested is between 8 and 128 characters
function verifyPasswordLength(length){
  for (var i = 0; i < 3; i++ ){
    if (length < 8){
      alert("Password length must be at least 8 charachters!");
      var length = prompt("Please enter a password length between 8 and 128");
    }else if  (length > 128){
      alert("Password length can be no longer than 128 charachters!");
      var newPasswordLength = prompt("Please enter a password length between 8 and 128");
    }else{
      return length;
    }
    parseInt(newPasswordLength);
    return newPasswordLength;
  };
}

function generatePassword(password, pwLength){
  
  var ansSpecialChars = confirm("Do you want special characters in your password?");
  var ansNumericChars = confirm("Do you want numbers in your password?"); 
  var ansUCLetters = confirm("Do you want Upper Case Letters in your password?");

  var alphabetLCOptions = ["a", "b", "c", "d","e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
  var alphabetUCOptions = ["A", "B", "C", "D","E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
  var numericOptions = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
  var specialChars = ["!", "#", "$", "%", "&", "*", "+" , "-", "/", "<", "?", "@", "[", "|"]
  var randomPassword
  
    if (ansSpecialChars === true && ansUCLetters === false && ansNumericChars === true ){
      // var passwordCharArray = [alphabetLCOptions, numericOptions, specialChars];
      for ( i = 0; i <= pwLength; i++ ){
      // var randomPassword = randomPassword.concat(passwordCharArray[Math.floor(Math.random() * pwLength) + 1]);
      randomPassword = randomPassword.concat(ansSpecialChars[Math.floor(Math.random() * pwLength) + 1]);
      console.log(pwLength);
      console.log(randomPassword);
      randomPassword = randomPassword.concat(ansNumericChars[Math.floor(Math.random() * pwLength) + 1]);
      console.log(pwLength);
      console.log(randomPassword);
      var randomPassword = randomPassword.concat(alphabetLCOptions[Math.floor(Math.random() * pwLength) + 1]);
      console.log(pwLength);
      conrandomPasswordsole.log(randomPassword);
     } 
    } else if(ansSpecialChars === false && ansUCLetters === true && ansNumericChars === true ){
      var passwordCharArray = [alphabetLCOptions, alphabetUCOptions, numericOptions];
      randomPassword = password.concat(passwordCharArray[Math.floor(Math.random() * pwLength) + 1]);
      console.log(pwLength);
      console.log(randomPassword);
    }else if(ansSpecialChars === true && ansUCLetters === true && ansNumericChars === false ){
      var passwordCharArray = [alphabetLCOptions, alphabetUCOptions, specialChars];
      // password = password.concat(passwordCharArray[Math.floor(Math.random() * pwLength) + 1]);
      randomPassword = passwordCharArray[Math.floor(Math.random() * pwLength) + 1];
      console.log(pwLength);
      console.log(randomPassword);
    }else{
    var passwordCharArray = [alphabetLCOptions, alphabetUCOptions, numericOptions, specialChars];
    password = password.concat(passwordCharArray[Math.floor(Math.random() * pwLength) + 1]);
    console.log(pwLength);
    console.log(randomPassword);
    }
    console.log(pwLength);
    console.log(randomPassword);
    return randomPassword;
}

  
// Write password to the #password input
// function writePassword() {
  
//   var passwordText = document.querySelector("#password");
  
 
  
  
  
  
  
  
 
 
//   passwordText.value = password;

// }

// Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);
