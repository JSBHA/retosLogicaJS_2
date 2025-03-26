// **🔟 **Determinar si dos arrays son iguales (mismos elementos, mismo orden)**

function areArraysEqual(arr1, arr2){
    if (arr1.length !== arr2.length) return false;

    return arr1.every((item, index) => item === arr2[index]);
}

console.log(areArraysEqual([1, 2, 3], [1, 2, 3])); // true
console.log(areArraysEqual([1, 2, 3], [3, 2, 1])); // false
console.log(areArraysEqual([1, 2], [1, 2, 3])); // false