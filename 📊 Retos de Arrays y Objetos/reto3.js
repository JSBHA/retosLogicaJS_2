// **3️⃣ **Encontrar el elemento más frecuente en un array**

function mostFrequentElement(arr) {
  let frequent = {};
  let maxFrequent = 0;
  let mostFrequent = null;

  for (let num of arr) {
    frequent[num] = (frequent[num] || 0) + 1;

    if (frequent[num] > maxFrequent) {
      maxFrequent = frequent[num];
      mostFrequent = num;
    }
  }
  return mostFrequent;
}

console.log(mostFrequentElement([1, 2, 3, 2, 4, 2, 3])); // 2
console.log(mostFrequentElement(["a", "b", "a", "c", "a", "b"])); // "a"
console.log(mostFrequentElement([true, false, true, true, false])); // true
console.log(mostFrequentElement([5])); // 5
console.log(mostFrequentElement([])); // null (si el array está vacío)
