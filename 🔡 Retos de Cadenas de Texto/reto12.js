//  **1️⃣2️⃣ **Extraer todas las palabras de una oración**

function extractWords(str) {
  let deleteChar = str.replace(/[¿?!¡,.]/g, "").split(/\s+/);
  return deleteChar;
}

console.log(extractWords("Hola, ¿cómo estás?"));
// ["Hola", "cómo", "estás"]

console.log(extractWords("¡JavaScript es genial!"));
// ["JavaScript", "es", "genial"]
