// 9️⃣ Ordenar un array de objetos por múltiples propiedades

function sortByProperties(data) {
  return data.sort((a, b) => a.name.localeCompare(b.name) || a.age - b.age);
}
const data = [
  { name: "Ana", age: 30 },
  { name: "Carlos", age: 25 },
  { name: "Ana", age: 20 },
  { name: "Beatriz", age: 25 },
];
console.log(sortByProperties(data));
