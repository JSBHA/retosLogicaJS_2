// **6️⃣ **Contar los números pares e impares en un array**

function countEvenOdd(nums) {
  let evens  = 0;
  let odds = 0;
  for (let num of nums) {
    if (num % 2 === 0) {
      evens++;
    } else {
      odds++;
    }
  }
  return { evens, odds };
}

console.log(countEvenOdd([1, 2, 3, 4, 5, 6])); // { pares: 3, impares: 3 }
console.log(countEvenOdd([7, 8, 9, 10, 11])); // { pares: 2, impares: 3 }
console.log(countEvenOdd([2, 4, 6, 8])); // { pares: 4, impares: 0 }
