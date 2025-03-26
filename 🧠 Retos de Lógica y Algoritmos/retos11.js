// **1️⃣1️⃣ **Encontrar el número faltante en una secuencia**

function findMissingNumber(arr) {
  let newArr = arr.sort((a, b) => a - b);
  for (let i = 1; i < newArr.length; i++) {
    if (newArr[i] !== newArr[i - 1] + 1) {
      return newArr[i - 1] + 1;
    }
  }
  return null;
}

console.log(findMissingNumber([1, 2, 3, 5])); // ➝ 4
console.log(findMissingNumber([10, 11, 13, 14])); // ➝ 12
console.log(findMissingNumber([100, 101, 102, 104])); // ➝ 103
