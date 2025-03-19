// **🔟 **Verificar si una palabra es un anagrama de otra**

function isAnagram(str1, str2) {
  let word1 = str1.toLowerCase().split("").sort().join("");
  let word2 = str2.toLowerCase().split("").sort().join("");

  return word1 === word2;
}

console.log(isAnagram("roma", "amor")); // true
console.log(isAnagram("listen", "silent")); // true
console.log(isAnagram("hello", "world")); // false
