import tareaInput from "./tareaInput.js";
import botonEnviar from "./botonEnviar.js";
import eliminarTodo from "./eliminarTodo.js";
import {agregarTarea,eliminarTarea} from "../funciones/funcionesTareas.js";  

const tareaContenedor = document.createElement("div");

botonEnviar.addEventListener("click", () => agregarTarea(tareaInput));


tareaContenedor.append(tareaInput);
tareaContenedor.append(botonEnviar);
tareaContenedor.append(eliminarTodo);



export default tareaContenedor;