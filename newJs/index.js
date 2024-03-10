
import { request } from "../js/request.js";
import { rendeData } from "./rendeData.js";

const init =  async () => {
const datos = await request();
window.addEventListener('DOMContentLoaded',rendeData(datos));
};

init();