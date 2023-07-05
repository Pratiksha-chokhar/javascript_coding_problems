
function findPermutations(str) {
  if (str.length <= 1) {
    return [str];
  }
  const permutations = [];
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    const remainingStr = str.slice(0, i) + str.slice(i + 1);
    const innerPermutations = findPermutations(remainingStr);
    for (let j = 0; j < innerPermutations.length; j++) {
      permutations.push(char + innerPermutations[j]);
    }
  }
  return permutations;
}

