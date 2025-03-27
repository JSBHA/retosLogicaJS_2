// **1️⃣3️⃣ **Encontrar el segundo número más pequeño en un array**

function secondSmallest(arr) {
  let uniqueNum = [...new Set(arr)];

  if (uniqueNum.length < 2) return null;

  let orderNum = uniqueNum.sort((a, b) => a - b);
  return orderNum[1];
}

console.log(secondSmallest([4, 1, 7, 1, 3, 9, 3])); // ➝ 3
console.log(secondSmallest([10, 5, 10, 20, 5])); // ➝ 10
console.log(secondSmallest([2, 2, 2, 2])); // ➝ null
console.log(secondSmallest([1])); // ➝ null
