// context.js

// Objeto que actúa como contexto
const Context = {
  state: {
    body: false, // Estado inicial de 'body'    
  },
  listeners: [], // Lista de suscriptores interesados en los cambios de estado

  // Función para suscribirse a los cambios de estado
  subscribe(listener) {
    this.listeners.push(listener);
  },

  // Función para cambiar el estado de 'body' y notificar a los suscriptores
  toggleBodyState() {
    // Simulación de una operación asíncrona
    return new Promise((resolve) => {    
        this.state = !this.state;
        this.notify(); // Notificar a los suscriptores sobre el cambio de estado
        console.log(this.state)
        resolve();
    });
  },

  // Función para notificar a los suscriptores sobre los cambios de estado
  notify() {
    this.listeners.forEach((listener) => {
      listener(this.state);
    });
  },

}

export default Context;
