

export const handlerTemRespo = (dataID,datos,info ) => {
    

    const {currentUser} = datos;
   
    let{image,username} = currentUser;    
    image = image.webp.replace("images", "assets");    
console.log(info.value)
  return ` <div id="${dataID+5}" class="feedback-card">
                          <div class="feedback-score">
                            <label for="feedback-input">
                              <button class="decrease">-</button>
                              <input type="text" name="feedback-input" value="${0}" />
                              <button class="increase">+</button>
                            </label>
                          </div>

                          <div class="feedback-content">
                            <div class="user-info">
                              <div class="info-details">
                                <img src="${image}" alt="foto perfil" />
                                <span class="username">${username}</span>
                                <p class="timestamp">${'1 sec'}</p>
                              </div>

                              <div class="reply-section">
                                <div>
                                  <img src="./assets/icon-delete.svg" alt="trash" />
                                  <button class="reply-btn delete" data-id="${dataID+5}" data-user="${username}">Delete</button>
                                </div>
                                <div>
                                  <img src="./assets/icon-edit.svg" alt="" />
                                  <button class="reply-btn edit" data-id="${dataID+5}" data-user="${username}">Edit</button>
                                </div>
                              </div>
                            </div>
                            <div class="feedback-description">
                              <p>${info.value}</p>
                                                       
                            </div>
                          </div>
                        </div>
 `;
};
