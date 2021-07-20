// Assignment code here
const characterAmountRange = document.getElementById("characterAmountRange");
const characterAmountNumber = document.getElementById("characterAmountNumber");
const includeUppercaseElement = document.getElementById("includeUppercase");
const includeLowercaseElement = document.getElementById("includeLowercase");
const includeNumberElement = document.getElementById("includeNumber");
const includeSymbolElement = document.getElementById("includeSymbol");
const form = document.getElementById("passwordGeneratorForm");

const LOWERCASE_CHAR_CODES = "abcdefghijklmnopqrstuvwxyz";
const UPPERCASE_CHAR_CODES = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const NUMBER_CHAR_CODES = "0123456789";
const SYMBOL_CHAR_CODES = "!@#$%^&*()_+><";

const password2 = document.getElementById("password");
console.log(LOWERCASE_CHAR_CODES);
console.log(UPPERCASE_CHAR_CODES);
characterAmountNumber.addEventListener("input", syncCharacterAmount);
characterAmountRange.addEventListener("input", syncCharacterAmount);

function syncCharacterAmount(e) {
  const value = e.target.value;
  characterAmountRange.value = value;
  characterAmountNumber.value = value;
}
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

form.addEventListener("submit", (e) => {
  console.log(password2);
  e.preventDefault();
  const characterAmount = characterAmountNumber.value;
  console.log(characterAmountNumber.value);
  const includeUppercase = includeUppercaseElement.checked;
  const includeLowercase = includeLowercaseElement.checked;
  const includeNumber = includeNumberElement.checked;
  const includeSymbol = includeSymbolElement.checked;
  const password1 = generatePassword(
    characterAmount,
    includeLowercase,
    includeUppercase,
    includeSymbol,
    includeNumber
  );
  password.value = password1;
});
function generatePassword(
  characterAmount,
  includeLowercase,
  includeUppercase,
  includeSymbol,
  includeNumber
) {
  let charCodes = "";
  if (includeUppercase) charCodes = charCodes.concat(UPPERCASE_CHAR_CODES);
  if (includeLowercase) charCodes = charCodes.concat(LOWERCASE_CHAR_CODES);
  if (includeNumber) charCodes = charCodes.concat(NUMBER_CHAR_CODES);
  if (includeSymbol) charCodes = charCodes.concat(SYMBOL_CHAR_CODES);

  const passwordCharacters = [];
  for (let i = 0; i < characterAmount; i++) {
    const characterCode =
      charCodes[Math.floor(Math.random() * charCodes.length)];
    console.log(characterCode);
    passwordCharacters.push(characterCode);
  }
  console.log("charCodes ", charCodes);
  return passwordCharacters.join("");
}
function arrayFromLowToHigh(low, high) {
  const array = [];
  for (let i = low; i <= high; i++) {
    array.push(i);
  }
  return array;
}

function syncCharacterAmount(e) {
  const value = e.target.value;
  characterAmountNumber.value = value;
  characterAmountRange.value = value;
}
// Add event listener to generate button
//generateBtn.addEventListener("click", generatePassword);
