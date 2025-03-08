//1️⃣1️⃣ Detectar si una cadena tiene todos los caracteres únicos

function hasUniqueChars(str){
    let uniqueChar = new Set(str)
    return uniqueChar.size === str.length
}

console.log(hasUniqueChars("abcdef"));  // true
console.log(hasUniqueChars("hello"));   // false
console.log(hasUniqueChars("123456"));  // true
console.log(hasUniqueChars("aA"));      // true (distingue mayúsculas y minúsculas)
console.log(hasUniqueChars(""));        // true (cadena vacía)