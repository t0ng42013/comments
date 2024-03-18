import { findMaxId } from "../utils/idSearch.js";
import { renderStore } from "../utils/renderStore.js";
import { createStore } from "./createStore.js";
import { modal } from "./modal.js";
import { reducer } from "./reducer.js";
import { renderUI } from "./renderIU.js";
import { request } from "./request.js";
import { score } from "./score.js";
import { templateCommentsSend, templateResponseUser } from "./templateHTML.js";

const containerSend = document.querySelector(".containerSend");

export const init = async () => {
  const initialState = await request();

  const store = createStore(reducer, initialState);

  renderUI(store.getState().comments, store.getState().currentUser);

  const addListener = () => {
    let currentID = findMaxId(store.getState()); //buscando el id mas alto actual
    
    const botones = document.querySelectorAll(".reply-btn");
    botones.forEach((comment) =>
      comment.addEventListener("click", (e) => {
        const ID = comment.getAttribute("data-id");
        const USER = comment.getAttribute("data-user");
        const contenedorRespuesta = document.querySelector(`.contenedor${ID}`);

        if (!contenedorRespuesta.children.length) {
          // Si el contenedor de respuesta no tiene hijos (es decir, está vacío), ejecuta este bloque de código.
          // Aquí se comprueba si el contenedor de respuesta está vacío.
          contenedorRespuesta.innerHTML = templateResponseUser(
            comment,
            currentID + 1
          );

          if (
            contenedorRespuesta.parentElement.classList.contains(
              "user-main-card"
            )
          ) {
            const btnComment =
              contenedorRespuesta.querySelector(".reply-response");
            btnComment.addEventListener("click", () => {
              let info = document.getElementById(USER).value;
            
              const action = {
                type: "addReply",
                payload: {
                  id: currentID + 1,
                  content: info,
                  createdAt: "1 sec ago",
                  score: 0,
                  idP: ID,
                  user: {
                    image: {
                      png: "./assets/avatars/image-juliusomo.png",
                      webp: "./assets/avatars/image-juliusomo.webp",
                    },
                    username: "juliusomo",
                  },
                  replyingTo: [],
                },
              };

              renderStore(action, store, addListener);
            });
          } else {
            const btnReplies =
              contenedorRespuesta.querySelector(".reply-response");
            btnReplies.addEventListener("click", () => {
              let info = document.getElementById(USER).value;
              
              const action = {
                type: "addReplyingTo",
                payload: {
                  id: currentID + 1,
                  content: info,
                  createdAt: "1 sec ago",
                  score: 0,
                  idP: ID,
                  user: {
                    image: {
                      png: "./assets/avatars/image-juliusomo.png",
                      webp: "./assets/avatars/image-juliusomo.webp",
                    },
                    username: "juliusomo",
                  },
                  replies: [],
                },
              };

              renderStore(action, store, addListener);
            });
          }
        } else {
          // Si el contenedor de respuesta tiene hijos, ejecuta este bloque de código.
          // Aquí se asume que el contenedor de respuesta no está vacío.
          contenedorRespuesta.innerHTML = "";
        }
      })
    );

    const botonEdit = document.querySelectorAll(".edit");
    botonEdit.forEach((btn) =>
      btn.addEventListener("click", (e) => {
        const ID = parseInt(btn.getAttribute("data-id"));
        const contenedorEditar = document.getElementById(`${ID}`);
        const textValue = contenedorEditar.querySelector(".feedback-description");
       
        const info = textValue.textContent.trim();
        textValue.innerHTML = '';
        textValue.innerHTML = `<textarea class="txtAValue" style="width: 90%; height: 100px; resize: none;">${info}</textarea><button class="reply-btn update-btn reply-response">Update</button>`;
        

        const btnUpdate = document.querySelectorAll(".update-btn");

        btnUpdate.forEach((element) => {
          element.addEventListener("click", () => {
            const action = {
              type: "editComment",
              payload: {
                id: ID,
                content: document.querySelector(".txtAValue").value,
               
              },
            };
            renderStore(action, store, addListener);
          });
        });
      })
    );
    
    const botonDelete = document.querySelectorAll(".delete");
   
    botonDelete.forEach((btn) => {
      btn.addEventListener("click", () => {
        let modalContainer = document.createElement("div");
        document.body.appendChild(modalContainer);
        modalContainer.innerHTML += modal();
        setTimeout(() => {       
        modalContainer.remove();
        }, 3000);
        const mDelete = document.querySelector(".message-delete").addEventListener("click",() => {
           const ID = parseInt(btn.getAttribute("data-id"));
            const action = {
          type: "deleteComment",
          payload: {
            id: ID,
          },
        };
        modalContainer.remove();
          renderStore(action, store, addListener)
        });
        const mCancel = document.querySelector(".message-cancel").addEventListener("click", () =>modalContainer.remove());
      
       
      });
    });
    score(store) 
  };
  addListener();
  

  containerSend.innerHTML = templateCommentsSend();
  const botonSend = document.getElementById("btnSend").addEventListener('click', () => {
     let currentID = findMaxId(store.getState()); 
     
     const action = {
       type: "addUser",
       payload: {
         id: currentID + 1,
         content: document.getElementById("txtValueSend").value,
         createdAt: "1 sec ago",
         score: 0,
         user: {
           image: {
             png: "./assets/avatars/image-juliusomo.png",
             webp: "./assets/avatars/image-juliusomo.webp",
           },
           username: "juliusomo",
         },
         replies: [],
       },
     };
     renderStore(action, store, addListener);
     score(store)
  });

};

init();
