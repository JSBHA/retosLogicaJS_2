// **8️⃣ **Contar cuántas veces aparece cada valor en un array de objetos**

function countValues(data) {
  let obj = {};
  for (let i = 0; i < data.length; i++) {
    let key = data[i].key;
    let value = data[i].value;
    if (obj[key] === undefined) {
      obj[key] = 1;
    } else {
      obj[key] += 1;
    }
  }

  return obj;
}

const data = [
  { category: "fruta", name: "manzana" },
  { category: "fruta", name: "pera" },
  { category: "fruta", name: "manzana" },
  { category: "verdura", name: "lechuga" },
  { category: "fruta", name: "pera" },
];
console.log(countValues(data, "name"));
// { manzana: 2, pera: 2, lechuga: 1 }

console.log(countValues(data, "category"));
// { fruta: 4, verdura: 1 }
