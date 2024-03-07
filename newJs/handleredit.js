

export const handleredit = ({target}) => {
    console.log(target, "paso");

    const id = target.getAttribute("data-id");
    const elementToedit = document.getElementById(id);

    // const editarTxt = document.querySelector('textarea');
    // editarTxt.classList.add("info-response");

    // const feedbackDescription = elementToedit.querySelector(".feedback-description");
    // const parrafo = feedbackDescription.children[0];
    // parrafo.style
    
    // feedbackDescription.appendChild(editarTxt);
    // console.log(a);
    // if (elementToedit) {
    //   console.log('lsdls') // Eliminar el elemento del DOM
    // } else {
    //   console.log("Elemento no encontrado.");
    // }
}

