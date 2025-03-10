// 2️⃣ Verificar si un número es un cuadrado perfecto

function isPerfectSquare(n){
    return Number.isInteger(Math.sqrt(n)); //  True,   
}

console.log(isPerfectSquare(25)); // true
console.log(isPerfectSquare(16)); // true
console.log(isPerfectSquare(10)); // false
console.log(isPerfectSquare(1));  // true
console.log(isPerfectSquare(0));  // true
console.log(isPerfectSquare(36)); // true