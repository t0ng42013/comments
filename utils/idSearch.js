 export function findMaxId(obj) {
  let maxId = -Infinity;

  // Función recursiva para recorrer objetos y arrays
  function traverse(obj) {
    if (typeof obj === "object" && obj !== null) {
      // Si el objeto es un array, iterar sobre cada elemento
      if (Array.isArray(obj)) {
        obj.forEach((element) => {
          traverse(element);
        });
      } else {
        // Si el objeto es un objeto, recorrer cada propiedad
        for (let key in obj) {
          // Verificar si la propiedad es un objeto o un valor
          if (typeof obj[key] === "object" && obj[key] !== null) {
            traverse(obj[key]);
          } else if (key === "id" && typeof obj[key] === "number") {
            // Verificar si la propiedad es un 'id' y actualizar el máximo
            maxId = Math.max(maxId, obj[key]);
          }
        }
      }
    }
  }

  // Iniciar la recursión con el objeto inicial
  traverse(obj);

  return maxId;
}
