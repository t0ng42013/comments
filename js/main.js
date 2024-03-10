import { request } from "./request.js";

const init = async () => {
   const datos = await request();
    console.log(datos);
let prueba = false;
    window.addEventListener('click', () =>{
console.log(prueba)
          const container = document.querySelector(".container");
          console.log(container);
          /********************************************************/
            const{comments, currentUser} = datos;
            console.log(comments, currentUser)
          /*************   */
          container.innerHTML = comments.map(comment =>{

            const { content, createdAt, score, user, id, replies }  = comment;
            
            const ruta = user.image.webp.replace("/images", "/assets");

             let isCurrentUser = false; // Establecer un valor predeterminado
             isCurrentUser = currentUser === user.username;

            return `
                    <section id="${id}" class="user-main-card">
                        
                            ${
                                isCurrentUser
                                ? `
                                    <div class="feedback-card">
                                        <div class="feedback-score">
                                            <label for="feedback-input">
                                            <button class="decrease">-</button>
                                            <input type="text" name="feedback-input" value="${score}" />
                                            <button class="increase">+</button>
                                            </label>
                                        </div>

                                        <div class="feedback-content">
                                            <div class="user-info">
                                            <div class="info-details">
                                                <img src="${ruta}" alt="foto perfil" />
                                                <span class="username">${user.username}</span>
                                                <p class="timestamp">${createdAt}</p>
                                            </div>

                                            <div class="reply-section">
                                                <div>
                                                <img src="./assets/icon-delete.svg" alt="trash" />
                                                <button class="reply-btn delete" data-id="${id}" data-user="${user.username}">Delete</button>
                                                </div>
                                                <div>
                                                <img src="./assets/icon-edit.svg" alt="" />
                                                <button class="reply-btn edit" data-id="${id}" data-user="${user.username}">Edit</button>
                                                </div>
                                            </div>
                                            </div>
                                            <div class="feedback-description">
                                            <p>${content}</p>
                                            </div>
                                        </div>
                                        </div>

                                    `
                                : `
                                    <div class="feedback-card">
                                        <div class="feedback-score">
                                        <label for="feedback-input">
                                            <button class="decrease">-</button>
                                            <input
                                            type="text"
                                            name="feedback-input"
                                            class="feedback-input"
                                            value="${score}"
                                            />
                                            <button class="increase">+</button>
                                        </label>
                                        </div>

                                        <div class="feedback-content">
                                        <div class="user-info">
                                            <div class="info-details">
                                            <img src="${ruta}" alt="foto perfil" />
                                            <span class="username">${user.username}</span>
                                            <p class="timestamp">${createdAt}</p>
                                            </div>

                                            <div class="reply-section">
                                            <img src="./assets/icon-reply.svg" alt="flecha" />
                                            <button class="reply-btn" data-id="${id}" data-user="${user.username}">
                                                Reply
                                            </button>
                                            </div>
                                        </div>
                                        <div class="feedback-description">
                                            <p>${content}</p>
                                        </div>
                                        </div>
                                    </div>
                                    `
              }
               
              

         <section class="section-replay">
         ${
           replies.length > 1
             ? replies.map(( reply) => {
                const { content, createdAt, score, user, id } = reply;

                isCurrentUser = currentUser.username === user.username;
                
                return `
                        ${
                            isCurrentUser
                            ? `         <div class="container replay"></div> 
                            
                                        <div id="${id}" class="feedback-card">
                                            <div class="feedback-score">
                                                <label for="feedback-input">
                                                <button class="decrease">-</button>
                                                <input type="text" name="feedback-input" value="${score}" />
                                                <button class="increase">+</button>
                                                </label>
                                            </div>

                                            <div class="feedback-content update">
                                                <div class="user-info">
                                                <div class="info-details">
                                                    <img src="${ruta}" alt="foto perfil" />
                                                    <span class="username">${user.username}</span>
                                                    <p class="timestamp">${createdAt}</p>
                                                </div>

                                                <div class="reply-section">
                                                    <div>
                                                    <img src="./assets/icon-delete.svg" alt="trash" />
                                                    <button class="reply-btn delete" data-id="${id}" data-user="${
                                user.username
                                }">Delete</button>
                                                    </div>
                                                    <div>
                                                    <img src="./assets/icon-edit.svg" alt="pen" />
                                                    <button class="reply-btn edit" data-id="${id}" data-user="${
                                user.username
                                }">Edit</button>
                                                    </div>
                                                </div>
                                                </div>
                                                <div class="feedback-description reply-description reply-update">
                                               <p>${content}</p>                                              
                                                
                                                </div>
                                            </div>
                                            </div>
                                            
                                        `
                            : `
                                        <div id="${id}" class="feedback-card">
                                            <div class="feedback-score">
                                            <label for="feedback-input">
                                                <button class="decrease">-</button>
                                                <input
                                                type="text"
                                                name="feedback-input"
                                                class="feedback-input"
                                                value="${score}"
                                                />
                                                <button class="increase">++</button>
                                            </label>
                                            </div>

                                            <div class="feedback-content">
                                            <div class="user-info">
                                                <div class="info-details">
                                                <img src="${ruta}" alt="foto perfil" />
                                                <span class="username">${user.username}</span>
                                                <p class="timestamp">${createdAt}</p>
                                                </div>

                                                <div class="reply-section">
                                                <img src="./assets/icon-reply.svg" alt="flecha" />
                                                <button class="reply-btn" data-id="${id}" data-user="${user.username}">
                                                    Reply
                                                </button>
                                                </div>
                                            </div>
                                            <div class="feedback-description">
                                                <p>${content}</p>
                                            </div>
                                            </div>
                                        </div>
                                        
                                        `
      }
            
        `;
             })
                 .join("")
             : ""
         }        
         </section>
         
        <div class="container replay"></div> 
          
      </section>
                    `;

          }).join("");

          const editar = Array.from(document.querySelectorAll(".edit"));
          console.log(editar)
          editar.forEach(btn =>{
            btn.addEventListener("click",()=>{
                console.log('first',prueba)
            prueba = !prueba;
            })
            
          });

           const deleteButtons = Array.from(
             document.querySelectorAll(".delete")
           );
           deleteButtons.forEach((btn) => {
                                btn.addEventListener("click", (event) => {
                                const target = event.target;                               
                                const id = target.getAttribute("data-id");

                                const element= document.getElementById(id);

                              
                                    element.innerHTML=
                                   prueba
                                     ? `<p>{content}</p>`
                                     : `<textarea style="width: 90%;height: 100px;resize: none;">{content}</textarea>                      <button class="reply-btn update-btn reply-response " >Update</button>`;
                               
             });
           });

    });
};

init();