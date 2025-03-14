// **5️⃣ **Contar cuántas veces aparece cada palabra en una oración

function countWords(str) {
  let countWords = {};
  let words = str
    .replace(/[^\w\s]/g, "")
    .toLowerCase()
    .split(" ");

  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    if (countWords[word]) {
      countWords[word]++; // Si ya existe, sumamos 1
    } else {
      countWords[word] = 1; // Si no existe, iniciamos en 1
    }
  }
  return countWords;
}

console.log(countWords("Hola mundo, hola a todos.")); //hola: 2, mundo: 1, a: 1, todos: 1
console.log(countWords("El sol brilla. El cielo es azul.")); //el: 2, sol: 1, brilla: 1, cielo: 1, es: 1,
console.log(countWords("Repetición, repetición, repetición!"));
console.log(countWords("Un solo término."));
