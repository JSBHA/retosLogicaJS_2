// **9️⃣ **Extraer los valores únicos de un array**

function uniqueValues(arr) {
  let value = new Set(arr);
  return [...value];
}

console.log(uniqueValues([1, 2, 2, 3, 4, 4, 5])); // [1, 2, 3, 4, 5]
console.log(uniqueValues(["a", "b", "a", "c", "b"])); // ["a", "b", "c"]
console.log(uniqueValues([true, false, true, true])); // [true, false]
console.log(uniqueValues([1, "1", 2, "2", 2])); // [1, "1", 2, "2"]
