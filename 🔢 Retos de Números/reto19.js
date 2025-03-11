// 1️⃣9️⃣ **Convertir un número decimal a hexadecimal**

function decimalToHex(num){
    if (typeof num !== "number" || num < 0) {
        return "Número inválido";
    }
    return num.toString(16).toUpperCase();
}

console.log(decimalToHex(255));  // "FF"
console.log(decimalToHex(16));   // "10"
console.log(decimalToHex(1234)); // "4D2"
console.log(decimalToHex(0));    // "0"