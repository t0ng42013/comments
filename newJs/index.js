
import { ListaProductos } from "../js/request.js";
import { rendeData } from "./rendeData.js";

const init =  async () => {
const datos = await ListaProductos();
window.addEventListener('DOMContentLoaded',rendeData(datos));
};

init();