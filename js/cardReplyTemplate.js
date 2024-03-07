export const replyTemplate = (user) =>{
   return `
     <div class="feedback-card reply-feedback">
            <div class="info-details replay-info">
              <img src="./assets/avatars/image-juliusomo.webp" alt="" />
            </div>
            <textarea class="info-response">@${user}, yeah, the attention to detail with the design</textarea
            >
            <div>
              <button class="reply-btn reply-response">REPLY</button>
            </div>
          </div>
   `;
}