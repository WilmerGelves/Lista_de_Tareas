import div2 from "../componentes/contenedorTareas.js";
import eliminarTodo from "../componentes/eliminarTodo.js";

function agregarTarea(input){

    const tarjeta = document.createElement("div");
    tarjeta.style =  `
        box-shadow: 0px 0px 5px rgb(183, 255, 0);
        border-radius:10px;
        padding:20px;
        margin-top:20px;
        width:100%;
    `;
    const parrafoTarea = document.createElement("p");
    parrafoTarea.textContent = input.value;//pasar al parrafo lo que se coloque en el input. 
    parrafoTarea.style = `
        color: white;
        text-align: center;
        font-size:1.2rem;
        padding:10px;
    `;


    input.value = null; //limpia el input

    const botonActualizar = document.createElement("button");
    botonActualizar.id = 'actualizar';
    botonActualizar.textContent = "Actualizar"; // 
    botonActualizar.style = `
    cursor: pointer;
    padding:5px;
    border:none;
    background-color: black;
    box-shadow: 0px 0px 4px yellow;);
    color: yellow;
    `;

//----------------------------------------------------------------
    //BOTON para tachar el texto. 
    const botonTachar = document.createElement("button");
    botonTachar.id = "tachar";
    botonTachar.textContent = "Tachar Texto";
    botonTachar.style = `
    font-weight: bold;
    cursor: pointer;
    padding:5px;
    border:none;
    background-color: black;
    box-shadow: 0px 0px 4px yellow;);
    color: yellow;
    `;
    botonTachar.tachado = false;
    botonTachar.addEventListener("click",() => tacharParrafo(botonTachar,parrafoTarea));
//----------------------------------------------------------------


    //input.value 
    botonActualizar.addEventListener("click",() => actualizarTarea(input,parrafoTarea));

    const botonEliminar = document.createElement("button"); //se crea un boton
    botonEliminar.id = "eliminar"; 
    botonEliminar.textContent = "Eliminar"; 
    botonEliminar.style = `
    cursor: pointer;
    padding:5px;
    border:none;
    background-color: black;
    box-shadow: 0px 0px 4px yellow;);
    color: yellow;
    `;
    botonEliminar.addEventListener("click",() => eliminarTarea(tarjeta));//se le pasa a la funcion eliminar tarea el parrafo y el botón eliminar.

    tarjeta.append(parrafoTarea,botonActualizar, botonEliminar,botonTachar);
    div2.append(tarjeta);
    
}

//----------------------------------------------------------------
//Boton eliminar todo. 
eliminarTodo.addEventListener("click",() => deleteAll(div2));


//Funcion tachar --------------------------------
function tacharParrafo(boton,parrafo){
    if(boton.tachado == false){
        parrafo.style = ` 
        text-decoration: line-through;
        color: white;
        text-align: center;
        padding:10px;
        font-size:1.2rem;
        `;
        boton.tachado = true;
    }else{
        parrafo.style = `
        text-decoration: none;
        color: white;
        text-align: center;
        padding:10px;
        font-size:1.2rem;
        `;
        boton.tachado = false;
    }
}
//------------------------------------------------------------


function actualizarTarea(nuevaTarea,tarea){
    tarea.textContent = nuevaTarea.value;
    nuevaTarea.value = "";
    nuevaTarea.placeholder = "Tarea actualizada!";
    setTimeout(() => {
        nuevaTarea.placeholder = "Ingresa tu tarea";
    },3000);
};


function eliminarTarea(tarjetaTarea) {
    tarjetaTarea.remove();
};

function deleteAll(elemento){
    div2.innerHTML = "";
    setTimeout(() => {
        alert('Se han eleiminado todas las tareas...');
    },1000);
};  

export {agregarTarea,eliminarTarea};
