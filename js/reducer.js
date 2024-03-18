export const initialState = {};

export const reducer = (state, action) => {
  switch (action.type) {
    case "addUser":
      return {
        ...state,
        comments: [...state.comments, action.payload],
      };
    case "addReply":
      const updatedComments = [...state.comments];
      updatedComments[action.payload.idP - 1].replies.push(action.payload);
      return {
        ...state,
        comments: updatedComments,
      };

    case "addReplyingTo": //revisar si esta funcion no esta al pedo
      const updatedReplies = [...state.comments];
      
      updatedReplies[1].replies.push(action.payload);
      return {
        ...state,
        comments: updatedReplies,
      };

    case "deleteComment":
      const updatedCommentsForDelete = state.comments
        .map((comment) => {
          // Verificamos si el comentario coincide con el ID en la acción
          if (comment.id === action.payload.id) {
            // Si coincide, no lo incluimos en el array de comentarios actualizados
            // Esto significa que el comentario principal se eliminará
            return false;
          }
          // Si no coincide, verificamos si hay respuestas asociadas a este comentario
          if (comment.replies && comment.replies.length > 0) {
            // Si hay respuestas, filtramos las que coinciden con el ID en la acción
            const updatedReplies = comment.replies.filter(
              (reply) => reply.id !== action.payload.id
            );
            // Actualizamos el comentario con las respuestas filtradas
            return {
              ...comment,
              replies: updatedReplies,
            };
          }
          // Si no hay respuestas o este no es el comentario que estamos buscando, lo dejamos sin cambios
          return comment;
        })
        .filter((comment) => comment !== false); // Eliminar los comentarios falsos (los que coinciden con el ID en la acción)

      // Retornamos el estado actualizado con los comentarios modificados
      return {
        ...state,
        comments: updatedCommentsForDelete,
      };

    case "editComment":      
     const updatedCommentsForEdit = state.comments.map((comment) => {
    if (comment.id === action.payload.id) {
      const { content = comment.content, score = comment.score } = action.payload;
      // Utilizamos la desestructuración para obtener el contenido y la puntuación
      // de la acción, y si alguno de estos campos no se proporciona, utilizamos
      // los valores actuales del comentario como valores predeterminados
      return {
        ...comment,
        content,
        score,
        // Aquí puedes agregar otros campos que desees editar en el comentario principal
      };
    }
        // Si este no es el comentario que estamos buscando, lo dejamos sin cambios
        // Pero también necesitamos verificar si hay respuestas asociadas a este comentario
        if (comment.replies && comment.replies.length > 0) {
          // Si hay respuestas, iteramos sobre ellas para buscar la que queremos editar
          const updatedReplies = comment.replies.map((reply) => {
            if (reply.id === action.payload.id){
              const{content = reply.content, score = reply.score} = action.payload;
              // Si la respuesta coincide con el ID en la acción,
              // actualizamos el contenido y otras propiedades de la respuesta
              return {
                ...reply,
                content,
                score
                // Aquí puedes agregar otros campos que desees editar en la respuesta
              };            
            }
            // Si esta no es la respuesta que estamos buscando, la dejamos sin cambios
            return reply;
            
          });
          // Retornamos el comentario actualizado con sus respuestas actualizadas
          return {
            ...comment,
            replies: updatedReplies,
          };
        }
        // Si no hay respuestas o este no es el comentario que estamos buscando, lo dejamos sin cambios
        return comment;
      });
      // Retornamos el estado actualizado con los comentarios modificados
      return {
        ...state,
        comments: updatedCommentsForEdit,
      };

    default:
      return state;
  }
};
