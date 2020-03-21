// Assignment Code
var generateBtn = document.querySelector("#generate");
var ansPasswordLength = prompt("How long do you want your password to be? You may chose a length of at Least 8 but no more than 128.");

var passwordLength = parseInt(ansPasswordLength);
var generatedPassword

 

passwordLength = verifyPasswordLength(passwordLength);
console.log(passwordLength);

var password = generatePassword(password, passwordLength);


  // Verify the length of the password requested is between 8 and 128 characters
function verifyPasswordLength(length){
  // Have user enter the correct password length
  for (var i = 0; i < 3; i++ ){
    if (length < 8){
      alert("Password length must be at least 8 charachters!");
      length =  prompt("Please enter a password length between 8 and 128");
      length = parseInt(length) 
      console.log(length)
    }else if  (length > 128){
      alert("Password length can be no longer than 128 charachters!");
      length = prompt("Please enter a password length between 8 and 128");
      length = parseInt(length) 
      console.log(length)
      return length;
    }  
  };

  // parseInt(length);
  console.log(length)
  return length;
}

function generatePassword(randomPassword, pwLength){
  var passwordMin = 8;
  var passwordMax = 128;
  if ( pwLength >= passwordMin && pwLength <= passwordMax){
    var ansSpecialChars = confirm("Do you want Special Characters in your password?");
    var ansNumericChars = confirm("Do you want Numbers in your password?"); 
    var ansUCLetters = confirm("Do you want Upper Case Letters in your password?");
  };
  var lcSpecialNumericChars = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "!", "#", "$", "%", "&", "*", "+" , "-", "/", "<", "?", "@", "[", "|", 0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
  
  var numericLCUC = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D","E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
 
  var specialUCLCChars = ["A", "B", "C", "D","E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "!", "#", "$", "%", "&", "*", "+" , "-", "/", "<", "?", "@", "[", "|", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",]
  
  var allChars=["A", "B", "C", "D","E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "!", "#", "$", "%", "&", "*", "+" , "-", "/", "<", "?", "@", "[", "|", 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
 
  randomPassword = "";
 
    if (ansSpecialChars === true && ansUCLetters === false && ansNumericChars === true ){
      console.log(pwLength);
      for ( i = 0; i < pwLength; i++ ){
        randomPassword = randomPassword.concat(lcSpecialNumericChars[Math.floor(Math.random() * 49) + 1]);
        console.log(randomPassword);
      }
    }else if(ansSpecialChars === false && ansUCLetters === true && ansNumericChars === true ){
      for ( j = 0; j < pwLength; j++ ){
        randomPassword = randomPassword.concat(numericLCUC[Math.floor(Math.random() * 62) + 1]);
        console.log(randomPassword);
      }
    }else if(ansSpecialChars === true && ansUCLetters === true && ansNumericChars === false ){
      for ( k = 0; k < pwLength; k++ ){
        randomPassword = randomPassword.concat(specialUCLCChars[Math.floor(Math.random() * 66) + 1]);
        console.log(pwLength);
        console.log(randomPassword);
      }
    }else{
      for ( l = 0; l < pwLength; l++ ){
        console.log(pwLength);
        randomPassword = randomPassword.concat(allChars[Math.floor(Math.random() * 72) + 1]);
        console.log(randomPassword);
      }
      console.log(randomPassword);
    }
    console.log(randomPassword);
    return randomPassword;
}

  
// Write password to the #password input
function writePassword() {
  
  var passwordText = document.querySelector("#password");
  
}
  
  
  
  
  
  
 
 
//   passwordText.value = password;

// }

// Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);
