//1️⃣5️⃣ **Encontrar el número más grande en un array**

function findMaxNumber(nums) {
  let maxNumber = nums[0];

  for (let num of nums) {
    if (num > maxNumber) {
      maxNumber = num;
    }
  }
  return maxNumber;
}

console.log(findMaxNumber([3, 7, 2, 9, 5])); // 9
console.log(findMaxNumber([-10, -3, -1, -20])); // -1
console.log(findMaxNumber([100, 50, 200, 150])); // 200
