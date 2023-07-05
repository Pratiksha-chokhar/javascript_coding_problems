
function findMaxSubarraySum(arr) {
  let maxSum = -Infinity;
  let currentSum = 0;
  
  for (let i = 0; i < arr.length; i++) {
    currentSum = Math.max(arr[i], currentSum + arr[i]);
    maxSum = Math.max(maxSum, currentSum);
  }
  
  return maxSum;
}

console.log(findMaxSubarraySum([-2, 1, -3, 4, -1, 2, 1, -5, 4])); // Output: 6 (corresponding to subarray [4, -1, 2, 1])

