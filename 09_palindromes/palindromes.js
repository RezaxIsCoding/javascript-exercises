const palindromes = function (string) {
// 1. Preprocess the string (optional)
const processedString = string.toLowerCase()  // Make lowercase (optional)
.replace(/\W/g, ""); // Remove non-alphanumeric characters

// 2. Reverse the processed string
const reversedString = processedString.split('').reverse().join('');

// 3. Compare the original (or processed) string with the reversed string
return (string === reversedString || processedString === reversedString);
};

// Do not edit below this line
module.exports = palindromes;
