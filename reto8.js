// **8️⃣ **Encontrar el elemento más frecuente en un array**

    function mostFrequentElement(arr) {
    let freqMap = arr.reduce((acc, i) => {
        acc[i] = (acc[i] || 0) + 1;
        return acc;
    }, {});

    let maxFreq = 0;
    let mostFreq = null;
    for (let key in freqMap) {
        if (freqMap[key] > maxFreq) {
        maxFreq = freqMap[key];
        mostFreq = key;
        }
    }
    return mostFreq;
    }

console.log(mostFrequentElement([1, 3, 2, 3, 4, 3, 2, 1])); // Output: 3
console.log(mostFrequentElement(["a", "b", "a", "c", "a", "b"])); // Output: "a"
console.log(mostFrequentElement([10, 20, 10, 20, 30])); // Output: 10 o 20 (ambos aparecen 2 veces)
console.log(mostFrequentElement([]));
