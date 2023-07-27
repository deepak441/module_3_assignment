// Assignment code here

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

var passwrdArr = [];
var passLength = 0;
var lowercaseArr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var uppercaseArr = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var numArr = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
var symbolArr = ['~','!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '=', '+', '[', '{', ']', '}', ';', ':', ',', '<', '.', '>', '/','?'];

function generatePassword(){
  var passwordText = "";
  for (var i = 0; i < passLength; i++) {
    var rndm = Math.floor(Math.random() * passwrdArr.length);
    passwordText  = passwordText + passwrdArr[rndm];
  }
  
  return passwordText;
  
}

// Write password to the #password input
function writePassword() {
  var questions = getQuestions();
  var passwordText = document.querySelector("#password");
  if (questions) {
    var password = generatePassword();
    passwordText.value = password;

  } else {
    passwordText.value = "";
  }
}

function getQuestions() {

  passLength = parseInt(prompt("Please choose the length of your password (Minimum:8, Maximum:128)"));
  
  if (isNaN(passLength) || passLength < 8 || passLength > 128) {
    alert("Please select the length between 8 and 128");
    return false;
  }
  
  if (confirm("Would you like to include lowercase letters?")) {
    passwrdArr = passwrdArr.concat(lowercaseArr);
  }
  if (confirm("Would you like to include uppercase letters?")) {
    passwrdArr = passwrdArr.concat(uppercaseArr);
  }
  if (confirm("Would you like to include numbers?")) {
    passwrdArr = passwrdArr.concat(numArr);
  }
  if (confirm("Would you like to include sp characters or symbols?")) {
    passwrdArr = passwrdArr.concat(symbolArr);
  }
  
  return true;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
