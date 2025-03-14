//**3️⃣ **Contar cuántas veces aparece cada palabra en una oración**

function countWords(str) {
  let countWord = {};
  let words = str
    .replace(/[^\w\s/]/g, "")
    .toLowerCase()
    .split(" ");

  for (let word of words) {
    if (word) {
      countWord[word] = (countWord[word] || 0) + 1;
    }
  }
  return countWord;
}

console.log(countWords("Hola mundo, hola a todos.")); // hola: 2, mundo: 1, a: 1, todos: 1
console.log(countWords("El sol brilla. El cielo es azul.")); //el: 2, sol: 1, brilla: 1, cielo: 1, es: 1
console.log(countWords("Repetición, repetición, repetición!")); //repeticin: 3
console.log(countWords("Un solo término.")); //un: 1, solo: 1, trmino: 1
