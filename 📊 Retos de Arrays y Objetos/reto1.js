// **1️⃣ **Fusionar dos arrays sin elementos repetidos**
function mergeArrays(arr1, arr2) {
  return [...new Set([...arr1, ...arr2])];
}

console.log(mergeArrays([1, 2, 3], [3, 4, 5])); // [1, 2, 3, 4, 5]
console.log(mergeArrays(["a", "b", "c"], ["b", "c", "d"])); // ["a", "b", "c", "d"]
console.log(mergeArrays([10, 20, 30], [30, 40, 50, 10])); // [10, 20, 30, 40, 50]
console.log(mergeArrays([], [1, 2, 3])); // [1, 2, 3]
console.log(mergeArrays([], [])); // []
