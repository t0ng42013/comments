import { ListaProductos } from "./request.js";
import { feedbackCardTemplate } from "./cardTemplate.js";
import { replyTemplate } from "./cardReplyTemplate.js";
import { handdlerSend } from "./cardReplySendTemplate.js";

const card = document.querySelector('.container');


const handlerReply = (e) => {
  const btn = e.target; //tengo el target
  const user = btn.getAttribute("data-user");
  e.stopPropagation();

  // Encuentra la tarjeta padre (.card) del botón clicado
  const card = btn.closest(".user-main-card");
  console.log(card)

  // Busca el primer elemento .replay dentro de la tarjeta específica
  const respon = card.querySelector(".replay");


   //veo si tiene contenido para toggler la tarjeta
    if(!respon.children.length){
        //insertar el template del user
        respon.innerHTML = replyTemplate(user); 
        // buscar info textarea
        const txtArea = document.querySelector(".info-response");
        const imgPerfil = document.querySelector('.replay-info')
        //search button to send comment
        const btnResponse = document.querySelector(".reply-response");
        //capture rute img
        const rutaImg = imgPerfil.querySelector('img');         

        //function to send reply
        btnResponse.addEventListener("click",() =>{
            //capture value 
        let txtValue = txtArea.value; 
        //template of reply message         
        console.log(card) 
                  
        handdlerSend(txtValue,card,rutaImg);
        //delete template replyTemplate
        respon.innerHTML="";
            
            const commentReply = document.querySelector(".comments");
            console.log(commentReply)
           
        }); 


    }else{
        respon.innerHTML="";
    }

};


//1- en el contenedor renderizo la card pricipal de feedbackcardtemplates
const render = (datos) => {
    card.innerHTML = datos.comments.map(feedbackCardTemplate).join("");    
    //2- busco los botones de la card de reply y le doy evento handlerReply
    const replyBtn = Array.from(document.querySelectorAll(".reply-btn")); 
    replyBtn.forEach(btn => btn.addEventListener("click",handlerReply));           
};



const init = async () => {
    const datos = await ListaProductos();
    console.log(datos)
    
    window.addEventListener('DOMContentLoaded',render(datos));    
};

init();