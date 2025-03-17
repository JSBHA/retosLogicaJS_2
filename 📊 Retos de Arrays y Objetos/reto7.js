// **7️⃣ **Combinar dos objetos en uno solo**

function mergeObjects(obj1, obj2){
    let obj = { ...obj1, ...obj2 };
    return obj;
}

console.log(mergeObjects({ a: 1, b: 2 }, { b: 3, c: 4 })); 
// { a: 1, b: 3, c: 4 }

console.log(mergeObjects({ name: "Ana", age: 25 }, { age: 30, country: "España" })); 
// { name: "Ana", age: 30, country: "España" }