// 7️⃣ Contar cuántas veces aparece cada palabra en una oración

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

console.log(countWords("Hola mundo, hola a todos."));
console.log(countWords("El sol brilla. El cielo es azul."));
console.log(countWords("Repetición, repetición, repetición!"));
console.log(countWords("Un solo término."));
