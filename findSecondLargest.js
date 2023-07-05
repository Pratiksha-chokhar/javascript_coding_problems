
function findSecondLargest(arr) {
  arr = Array.from(new Set(arr));
  arr.sort((a, b) => b - a);
  return arr[1];
}