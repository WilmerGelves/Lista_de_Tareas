import root from "./componentes/root.js"; //importando el elemento
import titulo from "./componentes/titulo.js";
import div2 from "./componentes/contenedorTareas.js";
import tareaContenedor from "./componentes/crearInput.js";
import Tarea from "./clases/tarea.js";

/* const miTarea = new Tarea("Hola mundo");

miTarea.texto = 'tacos';
root.append(miTarea.etiqueta); */

root.append(titulo);//le agrego el titulo al div.
root.append(tareaContenedor);
//creando otro div
root.append(div2);

