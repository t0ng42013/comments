import Context from "./toggleBoolean.js";

export const handleredit = ({ target }) => {
  console.log(target, "paso");

  const id = target.getAttribute("data-id");
  const elementToedit = document.getElementById(id);


  let text = elementToedit.children[1].children[1].textContent;

 
  // Cambiar el estado del cuerpo del contexto
  Context.toggleBodyState().then(() => {

    // Cambiar el contenido del elemento HTML basado en el estado del contexto
    elementToedit.children[1].children[1].innerHTML = Context.state
      ? `<p>${text.trim().replace("Update", "")}</p>`
      : `<textarea style="width: 90%; height: 100px; resize: none;">${text.trim().replace("Update", "")}
      </textarea><button class="reply-btn update-btn reply-response"data-id="${id}">Update</button>`; 
  });
};
