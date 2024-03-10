import Context from "./toggleBoolean.js";


export const handlerUpdate = ({target},valor="") => {
  console.log(target);
  const id = target.getAttribute("data-id");
  const element = document.getElementById(id);

console.log(valor)

 

  // Cambiar el estado del cuerpo del contexto
  Context.toggleBodyState().then(() => {
    // Cambiar el contenido del elemento HTML basado en el estado del contexto

    element.children[1].children[1].innerHTML = Context.state
      ? `<p>${valor}</p>`
      : `<textarea style="width: 90%; height: 100px; resize: none;">${valor
          }
    //   </textarea><button class="reply-btn update-btn reply-response">Update</button>`;
  });
}
