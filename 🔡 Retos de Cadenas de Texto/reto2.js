// **2️⃣ **Encontrar la segunda palabra más larga en una oración**

function secondLongestWord(str) {
  let words = str
    .replace(/[^\w\s/]/g, "")
    .split(" ")
    .filter((word) => word.length, 0);
  if (words.length < 2) return null;

  let seconBigWords = words.sort((a, b) => b.length - a.length);

  return seconBigWords[1];
}
console.log(secondLongestWord("El desarrollo web es increíble"));
console.log(secondLongestWord("La programación es una aventura emocionante")); // "emocionante"
console.log(secondLongestWord("JavaScript es mi lenguaje favorito")); //lenguaje
console.log(secondLongestWord("Hola mundo!")); // "Hola"
console.log(secondLongestWord("")); // NULL
