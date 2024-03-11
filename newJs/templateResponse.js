

export const templateResponse = (value) => {
  const ids = value.getAttribute("data-id");
  const user = value.getAttribute('data-user');
  let switchResult = '';
  switch (ids) {
    case "1":
      switchResult = "yeah, the attention to detail with the design is";
      break;
    case "2":
      switchResult = "yeah, the attention to detail with the design is";
      break;
    case "3":
      switchResult = "just to add another point ";
      break;
    case "4":
      switchResult = "";
      break;
    default:
      switchResult = "yeah!";
      break;
  }
  return ` 
   <div class="feedback-card reply-feedback">
      <div class="info-details replay-info">
        <img src="./assets/avatars/image-juliusomo.webp" alt="foto perfil" />
      </div>
      <textarea class="info-response">@${user},${switchResult} 
      </textarea>
      <div class="">
        <button class="reply-btn reply-response">REPLY</button>
      </div>
    </div>
    `;
  
}
