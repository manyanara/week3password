// Assignment Code
var generateBtn = document.querySelector("#generate"); 

//// 3. generate password based on input
const passVariety = {
  length: 0,
  lower: ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'],
  upper: ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'],
  special:['?', '!', '@', '#', '$', '%', '&', '*'],
}
function generatePassword(){
//// 1. prompt user for the password criteria
////    a. password length between 8-128 characters
////    b. Upper and Lower Case, special characters

let passLength =  window.prompt("Choose a password length between 8-128 characters:");
    if (passLength < 8 || passLength > 128) {
      window.alert("Error, length not valid");
    }else{
      let lowerCase = window.confirm("do you want to include lower case letters?")
      if (lowerCase == false){
        console.log("No lower case letters");
        passVariety.lower= undefined;
      }
    }
    let upperCase = window.confirm("DO YOU WANT TO INCLUDE UPPER CASE LETTERS?")
    if (upperCase == false){
      console.log("No upper case");
      passVariety.upper= undefined;
    }
    let specialChar = window.confirm("Do you want to include special characters?")
    if (specialChar == false){
      console.log("No special characters")
      passVariety.special= undefined;
    }
   //// 2. validate input 
   console.log(passVariety)

   // create array with all the variables 
   var passPoss = [passVariety.lower + passVariety.upper + passVariety.special];


   // select random strings according to length in a for loop
    for (let i=0; i,<= passLength, i++){
      passPoss[Math.floor(math.random* passLength)];
    }


    //// 4. display password on the page   
  return ("pssword ugh")
}





// Write password to the #password input
function writePassword() {
  // assignment code
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
