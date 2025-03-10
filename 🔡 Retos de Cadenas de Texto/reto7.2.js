// 7️⃣ Contar cuántas veces aparece cada letra en una oración

function countLetters(str) {
  let countLetter = {};
  let letters = str.replace(/\s/g, "").toLowerCase();

  for (let letter of letters) {
    countLetter[letter] = (countLetter[letter] || 0) + 1;
  }
  return countLetter;
}

console.log(countLetters("Hola mundo, hola a todos."));
console.log(countLetters("El sol brilla. El cielo es azul."));
console.log(countLetters("Repetición, repetición, repetición!"));
console.log(countLetters("Un solo término."));
