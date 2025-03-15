//**3️⃣ **Simular el juego de "FizzBuzz**"

function fizzBuzz(n) {
  return Array.from({ length: n }, (_, i) => {
    let num = i + 1;
    return num % 3 === 0 && num % 5 === 0
      ? "FizzBuzz"
      : num % 3 === 0
      ? "Fizz"
      : num % 5 === 0
      ? "Buzz"
      : num;
  });
}

console.log(fizzBuzz(15));
