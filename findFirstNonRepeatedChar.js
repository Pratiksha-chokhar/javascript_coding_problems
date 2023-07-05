
function findFirstNonRepeatedChar(input) {
  let charCount = {};
  for (let char of input) {
    charCount[char] = charCount[char] ? charCount[char] + 1 : 1;
  }
  for (let char of input) {
    if (charCount[char] === 1) {
      return char;
    }
  }
  return null;
}

console.log(findFirstNonRepeatedChar("aabbccddeeffg")); // Output: "g"

