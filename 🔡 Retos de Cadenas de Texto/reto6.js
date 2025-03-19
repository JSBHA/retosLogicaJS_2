// **6️⃣ **Contar el número de vocales en una cadena**

function countVowels(str) {
  return str
    .toLowerCase()
    .split("")
    .filter((vowel) => "aeiou".includes(vowel)).length;
}

console.log(countVowels("Hola Mundo"));
console.log(countVowels("Javascript es GENIAL!"));
// Salida esperada: 8
