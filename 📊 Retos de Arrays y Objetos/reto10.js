// **🔟 **Invertir las claves y valores de un objeto**

function invertObject(data) {
  let obj = Object.entries(data);

  for (let i = 0; i < obj.length; i++) {
    let [key, value] = obj[i];
    obj[i] = [value, key];
  }
  return Object.fromEntries(obj);
}

console.log(invertObject({ a: 1, b: 2, c: 3 }));
// Salida: { 1: "a", 2: "b", 3: "c" }

console.log(invertObject({ name: "Alice", age: 25 }));
// Salida: { Alice: "name", 25: "age" }
