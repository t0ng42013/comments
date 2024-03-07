import templateReplies from "./templateReplies.js";

export const templateComments = (data, currentUser) => {
  const { content, createdAt, score, user, id, replies } = data;

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
             ? replies
                 .map((reply) => templateReplies(reply, currentUser))
                 .join("")
             : ""
         }        
         </section>
         
        <div class="container replay"></div> 
          
      </section>
    `;
};
