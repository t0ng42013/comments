

export const handlerDelete = ({target}) => {
    console.log(target,'paso')

  const id = target.getAttribute('data-id');
  const elementToDelete = document.getElementById(id);
  console.log(elementToDelete, document.getElementById(id));
  if (elementToDelete) {
    elementToDelete.remove(); // Eliminar el elemento del DOM
  } else {
    console.log("Elemento no encontrado.");
  }
}
