export function encontrarPadreConID(elemento) {
  let padre = elemento.parentElement;
  while (padre && !padre.id) {
    padre = padre.parentElement;
  }
  // Devolver el valor del atributo id del elemento encontrado, o null si no se encontró ninguno
  return padre ? padre.id : null;
}
