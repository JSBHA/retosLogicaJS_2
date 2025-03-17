// **6️⃣ **Obtener todas las claves de un objeto**

function getObjectKeys(data) {
  return Object.keys(data);
}

data = {
  name: "Ana",
  age: 25,
  country: "España",
};
console.log(getObjectKeys(data));
console.log(getObjectKeys({}));
