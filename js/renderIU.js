

import { templateComments } from "./templateHTML.js";
const container = document.querySelector(".container");

export const renderUI = (comments, currentUser) => {
  container.innerHTML = comments
    .map((comment) => templateComments(comment, currentUser))
    .join("");
};
