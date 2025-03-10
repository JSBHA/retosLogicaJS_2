//1️⃣7️⃣**Determinar si un número es un palíndromo**

function isPalindrome(nums) {
  let num = nums.toString().split("").reverse().join("");

  if (num !== nums.toString()) {
    return false;
  }
  return true;
}

console.log(isPalindrome(121)); // true
console.log(isPalindrome(123)); // false
console.log(isPalindrome(1221)); // true
console.log(isPalindrome(10)); // false
console.log(isPalindrome(0)); // true
