//1️⃣6️⃣ **Calcular la suma de los dígitos de un número**

function sumDigits(nums) {
  let sumNums = nums.toString().split("");
  sumNums = sumNums.map(Number);
  return sumNums.reduce((a, b) => a + b, 0); // Se agrega 0 como valor inicial
}

console.log(sumDigits(123)); // 6  (1 + 2 + 3)
console.log(sumDigits(9876)); // 30 (9 + 8 + 7 + 6)
console.log(sumDigits(4002)); // 6  (4 + 0 + 0 + 2)
console.log(sumDigits(0)); // 0
console.log(sumDigits(99));
