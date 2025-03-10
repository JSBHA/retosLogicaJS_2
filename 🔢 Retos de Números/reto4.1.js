// 4️⃣ Sumar los primeros n números primos Función auxiliar a diferencia de la función anidada esta se puede usar en otras partes del codigo 

function isPrime(n) {
  if (n < 2) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}

function sumFirstNPrimes(n) {
  let primes = [];
  let num = 2;

  while (primes.length < n) {
    if (isPrime(num)) {
      primes.push(num);
    }
    num++;
  }
  return primes.reduce((sum, prime) => sum + prime, 0);
}

console.log(sumFirstNPrimes(5)); // 2 + 3 + 5 + 7 + 11 = 28
console.log(sumFirstNPrimes(10)); // 2 + 3 + 5 + 7 + 11 + 13 + 17 + 19 + 23 + 29 = 129
console.log(sumFirstNPrimes(1)); // 2
console.log(sumFirstNPrimes(3)); // 2 + 3 + 5 = 10
