import { renderUI } from "../js/renderIU.js";

export const renderStore = (action, store, addListener) => {
  store.dispatch(action);
  renderUI(store.getState().comments, store.getState().currentUser);
  addListener();
};