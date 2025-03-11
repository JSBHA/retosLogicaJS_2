//2️⃣0️⃣ **Contar la cantidad de dígitos en un número** 
function countDigits(nums){
    let num =  nums.toString();
    let lengthNums = num.length
    return lengthNums;
}

console.log(countDigits(12345)) // ➝ 5
console.log(countDigits(987))  // ➝ 3
console.log(countDigits(0))     // ➝ 1
console.log(countDigits(1000))  // ➝ 4
