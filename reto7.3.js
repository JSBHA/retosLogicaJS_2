// 7️⃣ Contar cuántas veces aparece cada letra en una oración

function countLetters(str){
    let countLetter = {};
    let letters = str.replace(/\s/g, '').toLowerCase();

    for(let i = 0; i < letters.length; i++){
        let letter = letters[i]
        if (countLetter[letter]){
            countLetter[letter]++;
        }else{
            countLetter[letter] = 1;
        }
    }
    return countLetter;

}

console.log(countLetters("Hola mundo, hola a todos."));
console.log(countLetters("El sol brilla. El cielo es azul."));
console.log(countLetters("Repetición, repetición, repetición!"));
console.log(countLetters("Un solo término."));