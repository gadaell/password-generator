// Assignment code here
const characterAmountRange = document.getElementById("characterAmountRange");
const characterAmountNumber = document.getElementById("characterAmountNumber");
const includeUppercaseElement = document.getElementById("includeUppercase");
const includeLowercaseElement = document.getElementById("includeLowercase");
const includeNumberElement = document.getElementById("includeNumber");
const includeSymbolElement = document.getElementById("includeSymbol");
const form = document.getElementById("passwordGeneratorForm");
const LOWERCASE_CHAR_CODES = arrayFromLowToHigh(97, 122);
const UPPERCASE_CHAR_CODES = arrayFromLowToHigh(65, 90);
const SYMBOL_CHAR_CODES = arrayFromLowToHigh(33, 47)
  .concat(arrayFromLowToHigh(58, 64))
  .concat(arrayFromLowToHigh(91, 96))
  .concat(arrayFromLowToHigh(123, 126));
const NUMBER_CHAR_CODES = arrayFromLowToHigh(48, 57);
const password = document.getElementById("#password");

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

// Add event listener to generate button
generateBtn.addEventListener("submit", writePassword);

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const characterAmount = characterAmountNumber.value;
  const includeUppercase = includeUppercaseElement.checked;
  const includeLowercase = includeLowercaseElement.checked;
  const includeNumber = includeNumberElement.checked;
  const includeSymbol = includeSymbolElement.checked;
  const password = generatePassword(
    characterAmountNumber,
    includeUppercase,
    includeLowercase,
    includeSymbol,
    includeNumber
  );
  password.innerText = password;
});
function generatePassword(
  characterAmount,
  includeLowercase,
  includeUppercase,
  includeSymbol,
  includeNumber
) {
  let charCodes = LOWERCASE_CHAR_CODES;
  if (includeUppercase) charCodes = charCodes.concat(UPPERCASE_CHAR_CODES);
  if (includeNumber) charCodes = charCodes.concat(NUMBER_CHAR_CODES);
  if (includeSymbol) charCodes = charCodes.concat(SYMBOL_CHAR_CODES);
  if (includeLowercase) charCodes = charCodes.concat(LOWERCASE_CHAR_CODES);

  const passwordCharacters = [];
  for (let i = 0; i < characterAmount; i++) {
    const characterCode =
      charCodes[Math.floor(Math.random() * characterAmount)];
    passwordCharacters.push(String.fromCharCode(characterCode));
  }
  return passwordCharacters.join("");
}
function arrayFromLowToHigh(low, high) {
  const array = [];
  for (let i = low; i <= high; i++) {
    array.push(i);
  }
  return array;
}
