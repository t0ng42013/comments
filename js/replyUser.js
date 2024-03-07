import { replyTemplate } from "./cardReplyTemplate";

const replyUser = (user) => {
    const replyU = document.createElement('div');//creo un div
    replyU.className = 'reply';

    //agrego la card user de respuesta
replyU.innerHTML = replyTemplate(user);

};