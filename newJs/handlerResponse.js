import { handlerTemRespo } from "./handlerTemRespo.js";

export const handlerResponse = (dataID, contenedor,datos,info) => {
    const arrayContenedores = Array.from(contenedor.querySelectorAll(".container"));
    
 
switch (dataID) {
  case "1":
    arrayContenedores[0].innerHTML = handlerTemRespo(dataID,datos,info);
    break;
  case "2":
    arrayContenedores[2].innerHTML = handlerTemRespo(dataID,datos,info);
    break;
  case "3":
    arrayContenedores[1].innerHTML = handlerTemRespo(dataID,datos,info);
    break;

  default:
    break;
}

console.log(dataID)
  return (arrayContenedores[0].innerHTML = handlerTemRespo(dataID,datos,info));
};
