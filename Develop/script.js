// Assignment Code
var generateBtn = document.querySelector("#generate");

// var password = generatePassword(password, passwordLength);
function verifyPasswordLength(length) {
  // Have user enter the correct password length
  for (var i = 0; i < 3; i++) {
    // If the length is less than 8 have them enter a number equal to or greather than 8
    if (length < 8) {
      alert("Password length must be at least 8 charachters!");
      length = prompt("Please enter a password length between 8 and 128");
      length = parseInt(length)
      console.log(length)
    }
    //  If the length is greater than 128 have them enter a number equal to or less than 128
    else if (length > 128) {
      alert("Password length can be no longer than 128 charachters!");
      length = prompt("Please enter a password length between 8 and 128");
      length = parseInt(length)
      console.log(length)
      // return length;
    }
    // If the initial entry was okay, parse it and return the value
    parseInt(length);
    console.log(length);
  }
  return length;
};

//Write password to the #password input
function writePassword() {
  // Generate the password
  function generatePassword() {
    // First ask how long they want their password to be
    var ansPasswordLength = prompt("How long do you want your password to be? You may chose a length of at Least 8 but no more than 128.");
    var passwordLength = 0;
    passwordLength = parseInt(ansPasswordLength);
    // Verify the length of the password is greather than or equal to 8 and less than or equal to 128
    passwordLength = verifyPasswordLength(passwordLength);
    console.log(passwordLength);

    var passwordMin = 8;
    var passwordMax = 128;
    // If the password has passed the lenght test ask what kind of characters they want in it
    if (passwordLength >= passwordMin && passwordLength <= passwordMax) {
      console.log("Inside min max if statement");
      console.log(passwordLength)
      // Ask user some questions about what kind of chars they want in their password
      var ansSpecialChars = confirm("Do you want Special Characters in your password?");
      var ansNumericChars = confirm("Do you want Numbers in your password?");
      var ansUCLetters = confirm("Do you want Upper Case Letters in your password?");
      var ansLCLetters = confirm("Do you want Lower Case letters in your password?")

      // var lcSpecialNumericChars = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "!", "#", "$", "%", "&", "*", "+" , "-", "/", "<", "?", "@", "[", "|", 0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

      // var specialNumericChars =[ "!", "#", "$", "%", "&", "*", "+" , "-", "/", "<", "?", "@", "[", "|", 0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

      // var special = ["!", "#", "$", "%", "&", "*", "+" , "-", "/", "<", "?", "@", "[", "|"]

      // var numeric = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

      // var lc = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

      // var uc = ["A", "B", "C", "D","E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

      // var lcNumericChars = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", 0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

      // var ucNumericChars = ["A", "B", "C", "D","E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", 0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

      // var ucSpecialChars = ["A", "B", "C", "D","E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "!", "#", "$", "%", "&", "*", "+" , "-", "/", "<", "?", "@", "[", "|"]

      // var specialLCChars = ["!", "#", "$", "%", "&", "*", "+" , "-", "/", "<", "?", "@", "[", "|", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

      // var numericLCUC = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D","E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

      // var specialUCLCChars = ["A", "B", "C", "D","E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "!", "#", "$", "%", "&", "*", "+" , "-", "/", "<", "?", "@", "[", "|", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

      // var ucLCChars = ["A", "B", "C", "D","E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

      // var allChars = ["A", "B", "C", "D","E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "!", "#", "$", "%", "&", "*", "+" , "-", "/", "<", "?", "@", "[", "|", 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

      var specialChars = "/<?[|~!@#$%^&*()-_+=";
      var ucChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      var lcChars = "abcdefghijklmnopqrstuvwxyz";
      var numericChars = "0123456789";

      var chosenChars = "";
      var charLength = 0;
      randomPassword = "";

      if (ansSpecialChars === true) {
        chosenChars = chosenChars + specialChars;
        charLength = charLength + 21;
      }
      console.log("chosenChars = " + chosenChars)
      if (ansNumericChars === true) {
        chosenChars = chosenChars + numericChars;
        charLength = charLength + 10;
      };
      console.log("chosenChars = " + chosenChars)
      if (ansUCLetters) {
        chosenChars = chosenChars + ucChars;
        charLength = charLength + 26;
      }
      console.log("chosenChars = " + chosenChars)
      if (ansLCLetters) {
        chosenChars = chosenChars + lcChars;
        charLength = charLength + 26;
      }
      if (ansSpecialChars === false && ansUCLetters === false && ansNumericChars === false && ansLCLetters === false) {
        alert("You must chose one of the options for Special Characters, Numbers, Lower Case, or Upper Case letters.")
      } else {
        console.log("chosenChars = " + chosenChars);
        console.log("charLength = " + charLength);
        chosenChars.split();
        console.log("chosenChars after split " + chosenChars);
        for (m = 0; m < passwordLength; m++) {
          randomPassword = randomPassword.concat(chosenChars[Math.floor(Math.random() * charLength)]);
          console.log("randomPassword " + randomPassword)
        };
      }


      //   if (ansSpecialChars === true && ansUCLetters === false && ansNumericChars === true && ansLCLetters === true ){
      //     console.log(passwordLength);
      //     for ( m = 0; m < passwordLength; m++ ){
      //       randomPassword = randomPassword.concat(lcSpecialNumericChars[Math.floor(Math.random() * 49)]);
      //       console.log(randomPassword);
      //     }
      //   } else if(ansSpecialChars === false && ansUCLetters === true && ansNumericChars === true && ansLCLetters === true  ){
      //     for ( j = 0; j < passwordLength; j++ ){
      //       randomPassword = randomPassword.concat(numericLCUC[Math.floor(Math.random() * 62)]);
      //       console.log(randomPassword);
      //     }
      //   }else if(ansSpecialChars === true && ansUCLetters === true && ansNumericChars === false && ansLCLetters === true ){
      //     for ( k = 0; k < passwordLength; k++ ){
      //       randomPassword = randomPassword.concat(specialUCLCChars[Math.floor(Math.random() * 66)]);
      //       console.log(passwordLength);
      //       console.log(randomPassword);
      //     }
      //   }else if(ansSpecialChars === false && ansUCLetters === false && ansNumericChars === true && ansLCLetters === true ){
      //     for ( n = 0; n < passwordLength; n++ ){randomPassword = randomPassword.concat(lcNumericChars[Math.floor(Math.random() * 36)]);
      //       console.log(randomPassword);
      //     }
      //   }else if(ansSpecialChars === true && ansUCLetters === false && ansNumericChars === false && ansLCLetters === true ){
      //     for ( n = 0; n < passwordLength; n++ ){randomPassword = randomPassword.concat(specialLCChars[Math.floor(Math.random() * 40)]);
      //     console.log(randomPassword);
      //     }
      //   }else if(ansSpecialChars === false && ansUCLetters === true && ansNumericChars === false && ansLCLetters === true ){
      //       for ( n = 0; n < passwordLength; n++ ){randomPassword = randomPassword.concat(ucLCChars[Math.floor(Math.random() * 52)]);
      //       console.log(randomPassword);
      //     }
      //   }else if(ansSpecialChars === true && ansUCLetters === false && ansNumericChars === true && ansLCLetters === false ){
      //     for ( n = 0; n < passwordLength; n++ ){randomPassword = randomPassword.concat(specialNumericChars[Math.floor(Math.random() * 24)]);
      //     console.log(randomPassword);
      //   }
      // }else if(ansSpecialChars === true && ansUCLetters === false && ansNumericChars === false && ansLCLetters === false ){
      //   for ( n = 0; n < passwordLength; n++ ){randomPassword = randomPassword.concat(special[Math.floor(Math.random() * 14)]);
      //   console.log(randomPassword);
      //   }
      // }else if(ansSpecialChars === false && ansUCLetters === true && ansNumericChars === false && ansLCLetters === true ){
      //   for ( n = 0; n < passwordLength; n++ ){randomPassword = randomPassword.concat(lc[Math.floor(Math.random() * 26)]);
      //   console.log(randomPassword);
      //   }
      // }else if(ansSpecialChars === false && ansUCLetters === true && ansNumericChars === false && ansLCLetters === false ){
      //   for ( n = 0; n < passwordLength; n++ ){randomPassword = randomPassword.concat(uc[Math.floor(Math.random() * 26)]);
      //   console.log(randomPassword);
      //   }
      // }else if(ansSpecialChars === false && ansUCLetters === false && ansNumericChars === true && ansLCLetters === false ){
      //   for ( n = 0; n < passwordLength; n++ ){randomPassword = randomPassword.concat(numeric[Math.floor(Math.random() * 10)]);
      //   console.log(randomPassword);
      //   }
      // }else if(ansSpecialChars === false && ansUCLetters === true && ansNumericChars === true && ansLCLetters === false ){
      //   for ( n = 0; n < passwordLength; n++ ){randomPassword = randomPassword.concat(ucNumericChars[Math.floor(Math.random() * 36)]);
      //   console.log(randomPassword);
      //   }
      // }else if(ansSpecialChars === true && ansUCLetters === true && ansNumericChars === false && ansLCLetters === false ){
      //   for ( n = 0; n < passwordLength; n++ ){randomPassword = randomPassword.concat(ucSpecialChars[Math.floor(Math.random() * 40)]);
      //   console.log(randomPassword);
      //   }
      // }else if(ansSpecialChars === false && ansUCLetters === false && ansNumericChars === false && ansLCLetters === false ){
      //   alert("You must chose one of the options for Special Characters, Numbers, Lower Case, or Upper Case letters.")
      // }else{
      //     for ( l = 0; l < passwordLength; l++ ){
      //       console.log(passwordLength);
      //       randomPassword = randomPassword.concat(allChars[Math.floor(Math.random() * 72) + 1]);
      //       console.log(randomPassword);
      //     }
      //     console.log(randomPassword);
      //   }

      console.log(randomPassword);
      return randomPassword;
    }
  };
  // Generate the password
  var password = generatePassword();

  if (password === undefined) {
    console.log(password);
    // Print out error message due to incorrect length being entered.
    var passwordText = document.querySelector("#password");
    passwordText.value = "Incorrect Password length.";
  } else {
    var passwordText = document.querySelector("#password");
    // Write password to the #password input
    passwordText.value = password;
    console.log(password);
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);