
export const feedbackCardTemplate = (ListaProductos) => {
const { content, createdAt, score, user, id } = ListaProductos;

const ruta = user.image.webp.replace("/images", "/assets");

return `
      <section class="user-main-card">
        <div class="feedback-card">
          <div class="feedback-score">
            <label for="feedback-input">
              <button id="decrease">-</button>
              <input
                type="text"
                name="feedback-input"
                id="feedback-input"
                value="${score}"
              />
              <button id="increase">+</button>
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
                <button class="reply-btn"
                        id="replyBtn"
                        data-id=${id}
                        data-user=${user.username}>Reply</button>
              </div>
            </div>
            <div class="feedback-description">
              <p>
                ${content}
              </p>
            </div>
          </div>
        </div>

        <div class="container replay">
         
        
          
        </div>
      </section>
        `;
};
