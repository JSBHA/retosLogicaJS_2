// **4️⃣ **Convertir un array de pares clave-valor en un objeto útilizando diferentes ciclos **

function arrayToObject(paris) {
  return paris.reduce((obj, [key, value]) => {
    obj[key] = value;
    return obj;
  }, {});
}

console.log(
  arrayToObject([
    ["nombre", "Ana"],
    ["edad", 25],
    ["ciudad", "Madrid"],
  ])
); // { nombre: "Ana", edad: 25, ciudad: "Madrid" }

console.log(
  arrayToObject([
    ["a", 1],
    ["b", 2],
    ["c", 3],
  ])
); // { a: 1, b: 2, c: 3 }

//Usando un ciclo for para organizar el arr en un objeto

function arrayObject(arr) {
  let obj = {};

  for (let i = 0; i < arr.length; i++) {
    const [key, value] = arr[i];
    obj[key] = value;
  }
  return obj;
}

console.log(
  arrayObject([
    ["id", 101],
    ["nombre", "Laptop"],
    ["marca", "Dell"],
    ["precio", 1200],
    ["stock", 50],
  ])
);

//Utilizando el ForEach

function arrToObject(obj) {
  let map = {};
   obj.forEach(([key, value]) => {
    map[key] = value;
  });
  return map;
}

console.log(
  arrToObject([
    ["nombre", "Carlos"],
    ["edad", 34],
    ["email", "carlos@example.com"],
    [
      "direcciones",
      [
        { calle: "Av. Central", ciudad: "Ciudad de México" },
        { calle: "Calle Luna", ciudad: "Guadalajara" },
      ],
    ],
  ])
);
