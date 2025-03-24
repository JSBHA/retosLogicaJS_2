// **5️⃣**Comprobar si un número es palíndromo**

function isPalindrome(num) {
  if (num < 0) return false;
  let reverseNum = num.toString().split("").reverse().join("");
  let convertNum = Number(reverseNum);
  return num === convertNum;
}

console.log(isPalindrome(121)); // true
console.log(isPalindrome(-121)); // false
console.log(isPalindrome(10)); // false
console.log(isPalindrome(1221)); // true
