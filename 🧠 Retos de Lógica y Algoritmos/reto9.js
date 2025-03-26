// **9️⃣ **Encontrar la intersección de dos arrays**
function intersectArrays(num1, num2) {
  let uniqueNum1 = new Set(num1);
  let uniqueNum2 = new Set(num2);

  let intersection = [...uniqueNum1].filter((item) => uniqueNum2.has(item));

  return intersection;
}

console.log(intersectArrays([1, 2, 3, 4], [3, 4, 5, 6])); // ➞ [3, 4]
console.log(intersectArrays([10, 20, 30], [40, 50, 60])); // ➞ []{}
