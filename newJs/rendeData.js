import { templateComments } from "./templateComments.js";
import { handlerReply } from "./handlerReply.js";
import { templateWrite } from "./templateWrite.js";
import { handlerSend } from "./handlerSend.js";
import { handlerDelete } from "./handlerDelete.js";
import { handleredit } from "./handleredit.js";
import { handlerUpdate } from "./handlerUpdate.js";
import { handlerResponse } from "./handlerResponse.js";

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
          let inputTArea = contenedorID.querySelector("textarea");
          const btnResponse = contenedorID.querySelector(".reply-response");
        
          console.log(inputTArea,btnResponse);
         
            if(btnResponse){
              btnResponse.addEventListener("click",()=> handlerResponse(dataID,container,datos,inputTArea));
              
            }
            if(inputTArea){
              
                inputTArea.addEventListener('input', (e)=> {
                inputTArea = e.target.value
              })  
               update.forEach(btn => btn.addEventListener("click",(e)=> handlerUpdate(e,inputTArea)));
               
            };
        
          }        
        
        deleteButton.forEach(btn => btn.addEventListener("click", handlerDelete)); 
    });
     
};