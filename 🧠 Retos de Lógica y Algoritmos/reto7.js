// **7️⃣ **Encontrar el segundo número más grande en un array**

function secondLargest(nums) {
  let uniqueNum = [...new Set(nums)];

  if (uniqueNum.length < 2) return null;
  uniqueNum.sort((a, b) => b - a);
  return uniqueNum[1];
}

console.log(secondLargest([10, 5, 8, 20, 15])); // 15
console.log(secondLargest([4, 4, 4, 3])); // 3
console.log(secondLargest([100, 99, 98, 97])); // 99
console.log(secondLargest([1])); // null (o algún mensaje indicando que no hay suficiente datos)
