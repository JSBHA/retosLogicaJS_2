// **1️⃣2️⃣ **Encontrar el número que más se repite en un array**

function mostFrequentNumber(arr) {
  let maxFreq = {};
  for (let i = 0; i < arr.length; i++) {
    let num = arr[i];
    maxFreq[num] = (maxFreq[num] || 0) + 1;
  }
  let countFreq = 0;
  let mostFreq = null;

  for (let num in maxFreq) {
    if (maxFreq[num] > countFreq) {
      countFreq = maxFreq[num];
      mostFreq = Number(num);
    }
  }
  return mostFreq;
}

console.log(mostFrequentNumber([1, 3, 2, 3, 4, 3, 5, 2, 1, 3]));
console.log(mostFrequentNumber([5, 5, 5, 2, 2, 8, 8, 8, 8])); // ➝ 8
// Salida esperada: 3
