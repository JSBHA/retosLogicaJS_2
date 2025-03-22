// ** 1️⃣1️⃣ **Reemplazar todas las vocales por un carácter específico**

function replaceVowels(str, char) {
  return str.replace(/[aeiouAEIOU]/g, char);
}

console.log(replaceVowels("Hola Mundo", "*"));
// Salida: "H*l* M*nd*"

console.log(replaceVowels("Javascript es genial", "#"));
// Salida: "J#v#scr#pt #s g#n##l"
