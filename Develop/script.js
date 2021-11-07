// Assignment Code
var generateBtn = document.querySelector("#generate");
var finalPassword;
function generatePassword() {
  // variables to use in functions
  var numeric = ["1","2","3","4","5","6","7","8","9","0"];
  var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
  var specialCharacters = ["!","@","3","$","%","^","&","*","(",")"];
  var wantNumeric;
  var wantLowerCase;
  var wantUpperCase;
  var wantSpecialCharacters;
  var numberEntered;
  var charactersEntered;

  //prompt functions

  numberEntered = parseInt(prompt("How long do you want your password to be? Enter a number between 8 and 128."));
  if (!numberEntered) {
    alert("Please enter a number.");
    generatePassword();
  } else if (numberEntered < 8 || numberEntered > 128) {
    numberEntered = alert("Please choose a number between 8 and 128.");
    generatePassword();
  } else {
    wantNumeric = confirm("Do you want numbers in your password?");
    wantLowerCase = confirm("Do you want lowercase letters in your password?");
    wantUpperCase = confirm("Do you want uppercase letters in your password?");
    wantSpecialCharacters = confirm("Do you want special characters in your password?");

    //no options selected
    if (!wantNumeric && !wantLowerCase && !wantUpperCase && !wantSpecialCharacters) {
      charactersEntered = alert("Please choose a type of character.");
      generatePassword();
    }
    //selected all 4 options
    else if (wantNumeric && wantLowerCase && wantUpperCase && wantSpecialCharacters) {
      charactersEntered = numeric.concat(lowerCase, upperCase, specialCharacters);
    }
    //selected 3 options
    else if (wantNumeric && wantLowerCase && wantUpperCase) {
      charactersEntered = numeric.concat(lowerCase, upperCase);
    }
    else if (wantNumeric && wantLowerCase && wantSpecialCharacters) {
      charactersEntered = numeric.concat(lowerCase,specialCharacters);
    }
    else if (wantNumeric && wantUpperCase && wantSpecialCharacters) {
      charactersEntered = numeric.concat(upperCase, specialCharacters);
    }
    else if (wantLowerCase && wantUpperCase && wantSpecialCharacters) {
      charactersEntered = lowerCase.concat(upperCase, specialCharacters);
    }
    //selected two options
    else if (wantNumeric && wantLowerCase) {
      charactersEntered = numeric.concat(lowerCase);
    }
    else if (wantNumeric && wantUpperCase) {
      charactersEntered = numeric.concat(upperCase);
    }
    else if (wantNumeric && wantSpecialCharacters) {
      charactersEntered = numeric.concat(specialCharacters);
    }
    else if (wantLowerCase && wantUpperCase) {
      charactersEntered = lowerCase.concat(upperCase);
    }
    else if (wantLowerCase && wantSpecialCharacters) {
      charactersEntered = lowerCase.concat(specialCharacters);
    }
    else if (wantUpperCase && wantSpecialCharacters) {
      charactersEntered = upperCase.concat(specialCharacters);
    }
    //selected one option
    else if (wantNumeric) {
      charactersEntered = numeric;
    }
    else if (wantLowerCase) {
      charactersEntered = lowerCase;
    }
    else if (wantUpperCase) {
      charactersEntered = upperCase;
    }
    else if (wantSpecialCharacters) {
      charactersEntered = specialCharacters;
    };
    //This will display the password.
    var tempPassword = [];
    for (let i = 0; i < numberEntered; i++) {
      var finalCharacters = charactersEntered[Math.floor(Math.random() * charactersEntered.length)];
      tempPassword.push(finalCharacters);
    }
    var tempPassword2 = tempPassword.join('');
    finalPassword = tempPassword2;
    return tempPassword;
  };
};
// Write password to the #password input
function writePassword() {
  generatePassword();
  document.getElementById('password').placeholder = finalPassword;

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)




















// // Uppercase
// function getUppercase() {
//   const upperCase = "QWERTYUIOPASDFGHJKLZXCVBNM";
//   return upperCase[Math.floor(Math.random() * upperCase.length)];
 
// }

// //Lowercase

// function getLowerCase() {
//   const lowerCase = "qwertyuiopasdfghjklzxcvbnm";
//   return lowerCase[Math.floor(Math.random() * lowerCase.length)];

// }

// // Numbers
// function getNumbers() {
//   const numbers = "0123456789";
//   return getNumbers[Math.floor(Math.random() * getNumbers.length)];


// }

// /// Symbol
// function getSymbols() {
//   const symbols = "`~!@#$%^&*()-_=+{}:;<,>.?\/*";
//   return symbols[Math.floor(Math.random() * symbols.length)];

// }






//   //Prompts
//   let length = prompt("Choose desired length of password");
//   let upperCase = confirm("Do you want uppercase?");
//   let lowerCase = confirm("Do you want lowercase?");
//   let numbers = confirm("Do you want numbers?");
//   let symbols = confirm("Do you want symbols?");
//   let password = []


//   const upperCaseLetters = getUppercase() 
//   const lowerCaseLetters = getLowerCase()

  
  

//   for (let i = 0; i < length; i++) {
//     password.push(upperCaseLetters, lowerCaseLetters)

//   }


//   return password.join("")
// }



// const resultDOM = document.getElementById("result");
// const copybtnDOM = document.getElementById("copy");
// const lengthDOM = document.getElementById("length");
// const uppercaseDOM = document.getElementById("uppercase");
// const numbersDOM = document.getElementById("numbers");
// const symbolsDOM = document.getElementById("symbols");
// const generatebtn = document.getElementById("generate");
// const form = document.getElementById("passwordGeneratorForm");





// //* 1- Prompt user for password criteria 
// //  a. Password length 8-128
// //  b. lower case upper case number special characters
// //  2- Validate input Ensure one character is being entered
// //  3- display password to page user



// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);


// function copyPassword() {



// }

// const result = document.getElementById('result');
// const copyButton = document.getElementById('clipboard');