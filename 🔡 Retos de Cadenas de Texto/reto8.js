// **8️⃣ **Remover los espacios en blanco de una cadena**

function removeSpaces(str) {
  return str.replace(/\s/g, '');
}

console.log(removeSpaces("Hola Mundo")); // "HolaMundo"
console.log(removeSpaces("  Espacios  al inicio y al final  ")); // "Espaciosalinicioyalfinal"
console.log(removeSpaces("Sin espacios")); // "Sinespacios"