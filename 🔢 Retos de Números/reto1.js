// **1️⃣ **Calcular el factorial de un número**

function factorial(n) {
  if (n <= 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

console.log(factorial(6));
console.log(factorial(5)); // 120
console.log(factorial(3)); // 6
console.log(factorial(0)); // 1
console.log(factorial(1));
