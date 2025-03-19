// **9️⃣ **Capitalizar la primera letra de cada palabra**

function capitalizeWords(str){
    return str.split(' ')
    .map(word => {
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
    })
    .join(' ')
}


console.log(capitalizeWords("hola mundo")); // "Hola Mundo"
console.log(capitalizeWords("esto es un reto")); // "Esto Es Un Reto"