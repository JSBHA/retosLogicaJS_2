// 5️⃣ Eliminar todas las consonantes de una cadena

function removeConsonants(str){
    return str.replace(/[^aeiouAEIOU\s]/g, '')
}




console.log(removeConsonants("Hola, mundo!"));  // "oa uo"
console.log(removeConsonants("JavaScript es genial")); // "aa i e eia"
console.log(removeConsonants("PROGRAMACIÓN")); // "OAAIÓ"
console.log(removeConsonants("1234 hello world!"));


