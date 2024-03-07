import { templateResponse } from "./templateResponse.js";

export const handlerReply = (id, con) => {
  const value = id.getAttribute("data-id");
  const arrayContenedores = Array.from(con.querySelectorAll(".container"));

  switch (value) {
    case "1":
      const contenedor1 = arrayContenedores[0];
      contenedor1.children.length
        ? (contenedor1.innerHTML = "")
        : (contenedor1.innerHTML = templateResponse(id));
      break;
    case "2":
      const contenedor2 = arrayContenedores[2];
      contenedor2.children.length
        ? (contenedor2.innerHTML = "")
        : (contenedor2.innerHTML = templateResponse(id));
      break;
    case "3":
      const contenedor3 = arrayContenedores[1];
      contenedor3.children.length
        ? (contenedor3.innerHTML = "")
        : (contenedor3.innerHTML = templateResponse(id),console.dir(contenedor3));
      break;
    

    default:
      return;
      break;
  }

};
