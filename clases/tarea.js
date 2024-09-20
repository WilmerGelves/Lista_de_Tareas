class Tarea {
    #etiqueta = document.createElement("p"); //el numeral vuelve privada la etiqueta.
    constructor(texto) {
        this.#etiqueta.textContent = texto;

    }

    get etiqueta(){ 
        return this.#etiqueta
    }

    set texto(nuevoTexto){
        if(nuevoTexto == ""){
            return;
        }
        this.#etiqueta.textContent = nuevoTexto;
    }
}

export default Tarea;   