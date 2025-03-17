//**5️⃣ **Ordenar un array de objetos por una propiedad específica**

function sortByProperty(data) {
  return data.sort((a, b) => {
    let ageComparison = a.age - b.age;
    return ageComparison !== 0 ? ageComparison : a.name.localeCompare(b.name);
  });
}

const data = [
  { name: "Ana", age: 25 },
  { name: "Luis", age: 30 },
  { name: "Carlos", age: 20 },
];

console.log(sortByProperty(data, "age"));
// [{ name: "Carlos", age: 20 }, { name: "Ana", age: 25 }, { name: "Luis", age: 30 }]

console.log(sortByProperty(data, "name"));
// [{ name: "Ana", age: 25 }, { name: "Carlos", age: 20 }, { name: "Luis", age: 30 }]
