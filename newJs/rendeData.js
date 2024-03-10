import { templateComments } from "./templateComments.js";
import { handlerReply } from "./handlerReply.js";
import { templateWrite } from "./templateWrite.js";
import { handlerSend } from "./handlerSend.js";
import { handlerDelete } from "./handlerDelete.js";
import { handleredit } from "./handleredit.js";
import { handlerUpdate } from "./handlerUpdate.js";

export const rendeData = (datos) => {

    console.log(datos)
    const container = document.querySelector(".container");
    const containerSend = document.querySelector(".containerSend");
        
    const currentUser = datos.currentUser.username;

    container.innerHTML = datos.comments.map((data) => templateComments(data, currentUser)).join("");
        
    containerSend.innerHTML = templateWrite();

    const botones = document.querySelectorAll(".reply-btn");
    botones.forEach(btn => btn.addEventListener("click", ()=>handlerReply(btn, container)));
    
    const btnSend = document.getElementById("btnSend");
    const txtValueSend = document.getElementById("txtValueSend");
    
    btnSend.addEventListener("click", ()=>handlerSend(txtValueSend.value, container, datos.comments));

    
    
    document.body.addEventListener('click', ({target})=> {
        const deleteButton = Array.from(document.querySelectorAll(".delete"));
        const editButton = Array.from(document.querySelectorAll(".edit"));
        const update = Array.from(document.querySelectorAll(".update-btn"));
        
        editButton.forEach(btn => btn.addEventListener("click", handleredit));

       const dataID = target.getAttribute("data-id");
       const contenedorID = document.getElementById(dataID);
       
      if (contenedorID){
        let inputt = contenedorID.querySelector("textarea");
        if(inputt){
            console.dir(inputt)
           inputt.addEventListener('input', (e)=> {
            inputt = e.target.value
           })
    
           update.forEach(btn => btn.addEventListener("click",(e)=> handlerUpdate(e,inputt)));
        };
        }        
        
      deleteButton.forEach(btn => btn.addEventListener("click", handlerDelete));      
        
       
    });
    
      
};