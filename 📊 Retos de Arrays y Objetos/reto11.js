// 1️⃣ **Convertir un array de pares clave-valor en un objeto**

function arrayToObject(paris){
    return Object.fromEntries(paris)
}

console.log(arrayToObject([["nombre", "Ana"], ["edad", 25], ["ciudad", "Madrid"]]));
// { nombre: "Ana", edad: 25, ciudad: "Madrid" }

console.log(arrayToObject([["a", 1], ["b", 2], ["c", 3]]));
// { a: 1, b: 2, c: 3 }