// 1️⃣4️⃣ **Determinar si un número es primo**

function isPrime(n) {
  if (n < 2) return false;

  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

console.log(isPrime(2)); // true
console.log(isPrime(7)); // true
console.log(isPrime(10)); // false
console.log(isPrime(17)); // true
console.log(isPrime(25)); // false
