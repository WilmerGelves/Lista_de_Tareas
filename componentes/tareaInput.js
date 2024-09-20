const tareaInput = document.createElement("input"); //creamos un  input
tareaInput.placeholder = "Escribe una tarea...";//

tareaInput.style = `
    padding:5px;
    outline:none;
    font-weight:bold;
    box-shadow: 1px 1px 5px rgb(183, 255, 0);
`;
export default tareaInput;