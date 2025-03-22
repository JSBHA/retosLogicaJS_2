// **1️⃣ **Calcular el factorial de un número utilizando el operador ternario **

function factorial(n) {
  return n <= 1 ? 1 : n * factorial(n - 1);
}

console.log(factorial(6));
console.log(factorial(5)); // 120
console.log(factorial(3)); // 6
console.log(factorial(0)); // 1
console.log(factorial(1));
