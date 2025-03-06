// 4️⃣ Sumar los primeros n números primos con la función anidada solo se puede usar dentro de esta funcion

function sumFirstNPrimes(n) {
  function isPrimes(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++){
        if(num % i === 0) return false;
    }
    return true;
  }

  let Primes = [];
  let num = 2;

  while(Primes.length < n ){
    if (isPrimes(num)){
        Primes.push(num);
    }
    num ++
  }
  return Primes.reduce((sum, prime) => sum + prime, 0);
}

console.log(sumFirstNPrimes(5)); // 2 + 3 + 5 + 7 + 11 = 28
console.log(sumFirstNPrimes(10)); // 2 + 3 + 5 + 7 + 11 + 13 + 17 + 19 + 23 + 29 = 129
console.log(sumFirstNPrimes(1)); // 2
console.log(sumFirstNPrimes(3)); // 2 + 3 + 5 = 10
