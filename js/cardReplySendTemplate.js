
export const handdlerSend = (txtValue,container,user) => {


  const card = document.createElement("section");
console.log(card,container,'sd')
  card.className = "section-replay";

  // Modifica esto con el tamaño que desees
  card.innerHTML = `<div class="feedback-card">
          <div class="feedback-score">
            <label for="feedback-input">
              <button id="decrease">-</button>
              <input
                type="text"
                name="feedback-input"
                id="feedback-input"
                value="12"
              />
              <button id="increase">+</button>
            </label>
          </div>

          <div class="feedback-content">
            <div class="user-info">
              <div class="info-details">
                <img src="${user.src}" alt="foto" />
                <span class="username">amyrobson</span>
                <p class="timestamp">1 month ago"</p>
              </div>
              <div class="reply-section">
                <img src="./assets/icon-reply.svg" alt="flecha" />
                <button class="reply-btn comments" data-id="">Reply</button>
              </div>
            </div>
            <div class="feedback-description">
              <p>
              
               ${txtValue}
              </p>
            </div>
          </div>
        </div>`;

     
  
  container.appendChild(card); // Inserta la tarjeta
};