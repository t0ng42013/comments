import { encontrarPadreConID } from "../utils/buscarPadre.js";

export const score = (store) =>{
   const result = (store) => {
     const listaLabel = document.querySelectorAll("label");

     listaLabel.forEach((label) => {
       const input = label.querySelector("input");
       const increaseBtn = label.querySelector(".increase");
        const decreaseBtn = label.querySelector(".decrease");

       increaseBtn.addEventListener("click", () => {
         let count = parseInt(input.value);
         count ++; // Aquí puedes modificar el valor como desees
         input.value = count; // Actualizar el valor del input
         
       
        //  const ID =  label.closest(".feedback-card").querySelector(".reply-btn")
        const ID = encontrarPadreConID(label);
        
        if(!ID)return        

         const action = {
           type: "editComment",
           payload: {
             id: parseInt(ID),
             score: count,
           },
         };
         store.dispatch(action);      
         
        });
        
        decreaseBtn.addEventListener("click", () => {
            let count = parseInt(input.value);
            count -= 1; // Decrementar el valor
            input.value = count; // Actualizar el valor del input
             const ID =  label.closest(".feedback-card").querySelector(".reply-btn")
         if (!ID) return;

         const action = {
           type: "editComment",
           payload: {
             id: parseInt(ID.getAttribute("data-id")),
             score: count,
           },
         };

         store.dispatch(action);
        });
    });
};


 result(store)  

};
