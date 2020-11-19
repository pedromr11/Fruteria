let boton1;
let boton2;
//Cuando carga la ventana emergente pone la funcionalidad a los botones
window.onload = () => {
    boton1 = document.getElementById("botonVolver");
    boton2 = document.getElementById("botonTerminar");


    //Boton para volver
    boton1.addEventListener("click", (event) => {
        window.close();
    }, false);

    //Boton para terminar pedido
    boton2.addEventListener("click", (event) => {
        window.opener.document.getElementById("form1").submit();
        window.close();
    }, false);
};

