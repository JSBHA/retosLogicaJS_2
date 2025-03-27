// **9️⃣ **Capitalizar la primera letra de cada palabra**

function capitalizeWords(str) {
  return str.replace(/\b\w/g, (char) => char.toUpperCase());
}

console.log(capitalizeWords("hola mundo")); // "Hola Mundo"
console.log(capitalizeWords("esto es un reto")); // "Esto Es Un Reto"
