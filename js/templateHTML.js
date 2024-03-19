
export const templateComments = (data, currentUser) => {
  const { content, createdAt, score, user, id, replies } = data;
  const { username } = currentUser;
  const ruta = user.image.webp.replace("/images", "/assets");
  const isCurrentUser = username === user.username;


  const feedbackContent = `
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
            ${
              isCurrentUser
                ? renderCurrentUserOptions(id, user.username)
                : renderReplyButton(id, user.username)
            }
          </div>
        </div>
        <div class="feedback-description">
          <p>${content}</p>
        </div>
      </div>
    </div>
  `;

  return `
    <section id="${id}" class="user-main-card">
      ${feedbackContent}
      <section class="section-replay">
        ${          
          replies.length > 0
            ? replies
                .map((reply) => renderFeedbackCardReply(reply, username))
                .join("")
            : ""
        }
      </section>
      <div class="contenedor${id} replay"></div> 
    </section>
  `;
};
// store.subscribe(renderFeedbackCardReply);

//css a btn del edit y eliminar
const renderCurrentUserOptions = (id, username) => `
  <div >
    <img src="./assets/icon-delete.svg" alt="trash" />
    <button class=" delete" data-id="${id}" data-user="${username}">Delete</button>
  </div>
  <div>
    <img src="./assets/icon-edit.svg" alt="" />
    <button class="edit" data-id="${id}" data-user="${username}">Edit</button>
  </div>
`;


const renderReplyButton = (id, username) => `
  <img src="./assets/icon-reply.svg" alt="flecha" />
  <button class="reply-btn" data-id="${id}" data-user="${username}">Reply</button>
`;

const renderFeedbackCardReply = (reply, currentUser) => {
  const { content, createdAt, score, user, id,replyingTo } = reply;
  const ruta = user.image.webp.replace("/images", "/assets");
  const isCurrentUser = currentUser === user.username;

  const feedbackContent = `
    <div id="${id}" class="feedback-card">
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
            ${
              isCurrentUser
                ? renderCurrentUserOptions(id, user.username)
                : renderReplyButton(id, user.username)
            }
          </div>
        </div>
        <div class="feedback-description">
        ${
          replyingTo === undefined
            ? `<p>${content}</p>`
            : `<p><span>@${replyingTo}</span> ${content}</p>`
        }
          
        </div>
      </div>
    </div>
    <div class="contenedor${id} replay"></div>
  `;

  return feedbackContent;
};

//estilos al css reply-responseSend
export const templateCommentsSend = () => {
  return `
     <section class="user-main-card">
      <div class="feedback-card reply-feedback">
          <div class="info-details replay-info">
              <img src="./assets/avatars/image-juliusomo.webp" alt="">
          </div>
          
              <textarea id="txtValueSend" class="info-response" placeholder="Add comment..."></textarea>

         
          <div >
              <button id="btnSend" class=" reply-responseSend ">Send</button>
          </div>
      </div>
      </section>
  `;
};

//reply-btn pasar a nueva clase o  reply-response
export const templateResponseUser = (dUser) => {
  const user = dUser.getAttribute("data-user");
  let switchResult = "";

  switch (user) {
    case "amyrobson":
      switchResult = "yeah, the attention to detail with the design is...";
      break;
    case "maxblagun":
      switchResult = " ";
      break;
    case "ramsesmiron":
      switchResult = "just to add another point ";
      break;
    default:
      switchResult = "yeah!";
      return;
  }

  return ` 
   <div class="feedback-card reply-feedback">
      <div class="info-details replay-info">
        <img src="./assets/avatars/image-juliusomo.webp" alt="foto perfil" />
      </div>
      <textarea placeholder="Add comment..." id="${user}" class="info-response">@${user},${switchResult} 
      </textarea>
      <div>
        <button class="reply-response">REPLY</button>
      </div>
    </div>
    
    `;
};

