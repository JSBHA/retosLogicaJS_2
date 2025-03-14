// **4️⃣ **Contar cuántas veces aparece cada letra en una oración**

function countLetters(str) {
  let countLetter = {};
  let letters = str.replace(/\s/g, "").toLowerCase();

  for (let letter of letters) {
    countLetter[letter] = (countLetter[letter] || 0) + 1;
  }
  return countLetter;
}

console.log(countLetters("Hola mundo, hola a todos."));//h: 2, o: 5, l: 2, a: 3, m: 1,
console.log(countLetters("El sol brilla. El cielo es azul.")); //e: 4, l: 7, s: 2, o: 2, b: 1
console.log(countLetters("Repetición, repetición, repetición!"));//r: 3, e: 6, p: 3, t: 3, i: 6,
console.log(countLetters("Un solo término."));//u: 1, n: 2, s: 1, o: 3, l: 1
