const reverseString = function(word) {
  let reversed = word.split('').reverse().join('');
  return reversed;
};
reverseString("hello");
reverseString("hello there");
reverseString('123! abc!');
reverseString('');
// Do not edit below this line
module.exports = reverseString;
