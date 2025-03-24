// **4️⃣**Invertir un número**

function reverseNumber(num) {
  let sign = Math.sign(num);
  let numStr = Math.abs(num).toString().split("").reverse().join("");
  return sign * Number(numStr);
}

console.log(reverseNumber(12345)); // 54321
console.log(reverseNumber(-987)); // -789
console.log(reverseNumber(500)); // 5
