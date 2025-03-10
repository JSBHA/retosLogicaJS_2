// 4️⃣ Sumar los primeros primos menores o iguales a n:

function isPrime(num) {
  return num < 2
    ? false
    : Array.from(
        { length: Math.floor(Math.sqrt(num)) - 1 },
        (_, i) => i + 2
      ).every((i) => num % i !== 0);
}

function sumPrimesUpTo(n) {
  return Array.from({ length: n + 1 }, (_, i) => i) // Crea un array del 0 a n
    .filter(isPrime) // Filtra solo los números primos
    .reduce((sum, num) => sum + num, 0); // Suma los primos
}

console.log(sumPrimesUpTo(5)); // 2 + 3 + 5 = 10
console.log(sumPrimesUpTo(10)); // 2 + 3 + 5 + 7 = 17
console.log(sumPrimesUpTo(20)); // 2 + 3 + 5 + 7 + 11 + 13 + 17 + 19 = 77
