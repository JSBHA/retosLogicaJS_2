// 1️⃣8️⃣**Generar una secuencia de Fibonacci hasta n términos**

function fibonacci(n){
    if (n === 1) return [0]; 

    const fib = [0, 1];
    for (let i = 2; i < n; i++){
        fib.push(fib[i - 1] + fib[i - 2]);
    }
    return fib;
}

console.log(fibonacci(5));  // [0, 1, 1, 2, 3]
console.log(fibonacci(8));  // [0, 1, 1, 2, 3, 5, 8, 13]
console.log(fibonacci(1));  // [0]
console.log(fibonacci(2));  // [0, 1]
console.log(fibonacci(10)); // [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]

