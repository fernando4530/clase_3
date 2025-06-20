function capturarEtiqueta(){
    console.log("ingresando a la función capturarEtiqueta()");
    const parrafo = document.getElementById("parrafo");
    return parrafo;
}

function saludar(){
    const etiquetaP = capturarEtiqueta();
    etiquetaP.textContent = "HOLA EQUIPO PILAR TECNO!"
}
