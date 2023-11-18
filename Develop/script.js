// Assignment Code
var generateBtn = document.querySelector("#generate");
const passLength =  window.prompt("Choose a password length between 8-128 characters:");
    if (passLength < 8 || passLength > 128) {
      window.alert("Error, length not valid");
    }
var result = []

const big= {
  lower: ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'],
  upper: ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'],
  special:['?', '!', '@', '#', '$', '%', '&', '*'],
}
var Bank = []

function generatePassword(){
const lowerCase = window.confirm("Do you want to include lower Case letters?")
const upperCase = window.confirm("Do you want to include Upper Case letters?")
const specialChar = window.confirm("Do you want to include special characters?")


if(lowerCase=== true && upperCase === true && specialChar === true) {
  Bank = big.lower.concat(big.upper, big.special);
}else if (lowerCase === true && upperCase=== true && specialChar === false) {
  Bank = big.lower.concat(big.upper);
} else if (lowerCase=== true && upperCase === false && specialChar === false){
  Bank = big.lower;
} else if (lowerCase === true && upperCase === false && specialChar === true) {
  Bank = big.lower.concat(big.specialChar);
} else if (lowerCase === false && upperCase === true && specialChar === true){
  Bank = big.upper.concat(big.special);
} else if (lowerCase === false && upperCase === true && specialChar === false){
  Bank = big.upper;
} else if (lowerCase === false && upperCase === false && specialChar === true) {
  Bank = big.special;
} else if (lowerCase === false && upperCase === false && specialChar === false){
  window.alert("You must make a selection. Start Over.")
  generatePassword();
} 

let random;

for (let i=0; i < passLength; i++){
   random = Math.floor(Math.random() * Bank.length);
    result.push(Bank[random]);
  } 

}


// Write password to the #password input

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = result.join(""); // join creates a new string out of all the elements in the array

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
writePassword();