import { templateComments } from "./templateComments.js";
import { handlerReply } from "./handlerReply.js";
import { templateWrite } from "./templateWrite.js";
import { handlerSend } from "./handlerSend.js";
import { handlerDelete } from "./handlerDelete.js";
import { handleredit } from "./handleredit.js";

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

    document.body.addEventListener('click', (e)=> {
        const deleteButton = Array.from(document.querySelectorAll(".delete"));
        const editButton = Array.from(document.querySelectorAll(".edit"));
       
        deleteButton.forEach(btn => btn.addEventListener("click", (e) => handlerDelete(e)));
        editButton.forEach(btn => btn.addEventListener("click", (e) => handleredit(e)));
        
              
    });
    
    
};