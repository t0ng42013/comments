export const handlerSend = (value, container, datos) => {
    let newId = 5; // ID inicial

    // Verificar si el ID ya existe en los elementos existentes
    while (document.getElementById(newId)) {
      newId++; // Incrementar el ID hasta que se encuentre uno único
    }

  let newUsername = {
    content: value,
    createdAt: "1 sec ago",
    id: newId,
    replies: [],
    score: 0,
    user: {
      image: {
        png: "./assets/avatars/image-juliusomo.png",
        webp: "./assets/avatars/image-juliusomo.webp",
      },
      username: "juliusomo",
    },
  };
 


  const newResponse = document.createElement("section");
  newResponse.classList.add("user-main-card");
  newResponse.innerHTML = `
    
        <div id="${newUsername.id}" class="feedback-card">
                          <div class="feedback-score">
                            <label for="feedback-input">
                              <button class="decrease">-</button>
                              <input type="text" name="feedback-input" value="${newUsername.score}" />
                              <button class="increase">+</button>
                            </label>
                          </div>

                          <div class="feedback-content">
                            <div class="user-info">
                              <div class="info-details">
                                <img src="${newUsername.user.image.webp}" alt="foto perfil" />
                                <span class="username">${newUsername.user.username}</span>
                                <p class="timestamp">${newUsername.createdAt}</p>
                              </div>

                              <div class="reply-section">
                                <div>
                                  <img src="./assets/icon-delete.svg" alt="trash" />
                                  <button class="reply-btn delete" data-id="${newUsername.id}" data-user="${newUsername.user.username}">Delete</button>
                                </div>
                                <div>
                                  <img src="./assets/icon-edit.svg" alt="" />
                                  <button class="reply-btn edit" data-id="${newUsername.id}" data-user="${newUsername.user.username}">Edit</button>
                                </div>
                              </div>
                            </div>
                            <div class="feedback-description">
                              <p>${newUsername.content}</p>
                              <textarea></textarea>
                              <button class="reply-btn update-btn reply-response " >Update</button>

                            </div>
                          </div>
                        </div>
                       
  `;
 
  return container.appendChild(newResponse);
};
