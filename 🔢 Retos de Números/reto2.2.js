// 2️⃣ Verificar si un número es un cuadrado perfecto

function isPerfectSquare(n) {
  if (n < 0) return false; // No hay cuadrados perfectos negativos

  for (let i = 1; i * i <= n; i++) {
    if (i * i === n) {
      return true;
    }
  }
  return false;
}

console.log(isPerfectSquare(25)); // true
console.log(isPerfectSquare(16)); // true
console.log(isPerfectSquare(10)); // false
console.log(isPerfectSquare(1)); // true
console.log(isPerfectSquare(0)); // true
console.log(isPerfectSquare(36)); // true
