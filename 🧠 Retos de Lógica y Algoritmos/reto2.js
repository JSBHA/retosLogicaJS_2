/**2️⃣ **Encontrar la subcadena más larga sin repetir caracteres **/

function SubstringWithoutRepeating(str) {
  let set = new Set();
  let left = 0;
  let maxLength = 0;

  for (let right = 0; right < str.length; right++) {
    while (set.has(str[right])) {
      set.delete(str[left]);
      left++;
    }
    set.add(str[right]);
    maxLength = Math.max(maxLength, right - left + 1);
  }
  return maxLength;
}

console.log(SubstringWithoutRepeating("abcabcbb")); // 3
console.log(SubstringWithoutRepeating("bbbbb")); // 1
console.log(SubstringWithoutRepeating("pwwkew")); // 3
