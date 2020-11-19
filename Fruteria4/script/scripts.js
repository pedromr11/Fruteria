//Aquí creo todas las variables necesarias
let ArrayKilos = [0, 0, 0, 0, 0, 0, 0, 0, 0 ,0];
let ArrayPrecio = [0.80, 1.30, 1.60, 0.90, 3, 4.50, 2.30, 0.60, 0.50, 1.40];
let ArrayFrutas = ["Cereza", "Chirimoya", "Fresa", "Manzana", "Melon", "Naranja", "Pera", "Platano", "Sandia", "Uvas"];
let ArrayEstaciones = ["V", "I", "I", "V", "I", "V", "I", "V", "I", "V"];
let ArrayProximidad = ["True", "False", "True", "False", "True", "False", "True", "False", "True", "False"];
let ArrayRegion = ["Caceres", "Murcia", "Huelva", "Albacete", "Granada", "Valencia", "Tarragona", "Canarias", "Sevilla", "Lugo"];
let ArrayConservar = ["True", "False", "True", "False", "True", "False", "True", "False", "True", "False"];
let ArrayObjetos = [0, 0, 0, 0, 0, 0, 0, 0, 0 ,0];
let Total = 0;
let kgtotal = 0;
let precioMedio = 0;
let pedir = 0;
let fecha = new Date();
let fruta;
let mostrar2;
let textarea;
let ventana;
let form;
let nombre;
let nombreError;
let email;
let emailError;
let todoCorrecto;
let ventanilla;

//Clases para crear los objetos(frutas)
class Fruta {
    constructor(Nombre, Kilos, Precio){
        this.Nombre = Nombre;
        this.Kilos = Kilos;
        this.Precio = Precio;
    }

}


class Verano extends Fruta{
    constructor(Nombre, Kilos, Precio, Proximidad, Region){
        super(Nombre, Kilos, Precio);
        this.Proximidad = Proximidad;
        this.Region = Region;
    }
}


class Invierno extends Fruta{
    constructor(Nombre, Kilos, Precio, Conservar){
        super(Nombre, Kilos, Precio);
        this.Conservar = Conservar;
    }
}



//Cuando carga la página comprueba que los datos del formulario estén completos, sino salta un aviso.
window.onload = () => {
    form = document.getElementById("form1");
    nombre = document.getElementById("nombre");
    nombreError = document.getElementById("errorNombre");
    apellidos = document.getElementById("apellidos");
    apellidosError = document.getElementById("errorApellidos");
    direccion = document.getElementById("direccion");
    direccionError = document.getElementById("errorDireccion");
    email = document.getElementById("mail");
    emailError = document.getElementById("errorCorreo");

    form.addEventListener("submit", (event) => {
        todoCorrecto = true;
        nombreError.textContent = nombre.validationMessage;
        if (!nombre.validity.valid) {
            todoCorrecto = false;
            event.preventDefault();
        }
        apellidosError.textContent = apellidos.validationMessage;
        if (!apellidos.validity.valid) {
            todoCorrecto = false;
            event.preventDefault();
        }
        direccionError.textContent = direccion.validationMessage;
        if (!direccion.validity.valid) {
            todoCorrecto = false;
            event.preventDefault();
        }
        emailError.textContent = email.validationMessage;
        if (!email.validity.valid) {
            todoCorrecto = false;
            event.preventDefault();
        }
        if (todoCorrecto) {
            ventanilla = window.open("./emergente.html", "pop-up", "width=500px height=300px");
        
            event.preventDefault();
        }
    });
};



//Función que recoge los kilos de los input, crea objetos, muestra las frutas en lateral y que vacía los input 
function frutitas(num){  
    
    //Recoge los kilos
    pedir = document.getElementsByTagName("input");
    //Los mete en un array
    ArrayKilos[num] = parseInt(pedir[num].value);

   

    //Crea los objetos
    if(ArrayEstaciones[num] == "V"){
        fruta = new Verano();
        fruta.Nombre = ArrayFrutas[num];
        fruta.Kilos = ArrayKilos[num];
        fruta.Precio = ArrayPrecio[num];
        fruta.Proximidad = ArrayProximidad[num];
        fruta.Region = ArrayRegion[num];
    }else{
        fruta = new Invierno();
        fruta.Nombre = ArrayFrutas[num];
        fruta.Kilos = ArrayKilos[num];
        fruta.Precio = ArrayPrecio[num];
        fruta.Conservar = ArrayConservar[num];
    }

       

    //Mete los objetos en un array
    ArrayObjetos[num] = fruta;

    //Muestra las frutas y los kilos que queremos en un div a la derecha
    mostrar2 = document.getElementById("lateral");

    mostrar2.innerHTML +="<p style='background-color:powderblue;'>" +  ArrayObjetos[num].Nombre +"---"+ pedir[num].value + "</p>"; 


    pedir[num].value = "";
}


//Función para mostrar las frutas compradas con sus precios y sus kilos, mostrar el mensaje con el tipo de fruta y calcular los precios totales y finales.
function mostrar(){
    
    textarea = document.getElementById("resultado");
    
    //Poner en blanco el textarea
    textarea.value = " ";
    
   
    //Mostrar los mensajes de los tipos de frutas que hemos comprado
    for (let index = 0; index < ArrayFrutas.length; index++) {
        
            if(ArrayEstaciones[index] == "V" && ArrayObjetos[index].Kilos > 0){
                if(ArrayObjetos[index].Proximidad == "True"){
                    alert("El/La " + ArrayObjetos[index].Nombre + " es fruta de verano, de proximidad y está recogida en " + ArrayObjetos[index].Region);
                }
                if(ArrayObjetos[index].Proximidad == "False"){
                    alert("El/La " + ArrayObjetos[index].Nombre + " es fruta de verano, no es de proximidad y está recogida en " + ArrayObjetos[index].Region); 
                }
            }else if(ArrayEstaciones[index] == "I" && ArrayObjetos[index].Kilos > 0){
                if(ArrayObjetos[index].Conservar == "True"){
                    alert("El/La " + ArrayObjetos[index].Nombre + " es fruta de invierno y es recomendable conservarla fuera de la nevera.");
                }
                if (ArrayObjetos[index].Conservar == "False") {
                    alert("El/La " + ArrayObjetos[index].Nombre + " es fruta de invierno y no es recomendable conservarla fuera de la nevera.");
                }

            }
    }

    

    //Fecha de la compra
    textarea.value = "Fecha de compra: " + fecha.toLocaleString() + "\n";

    //Crea y muestra el nombre, la cantidad, el precio y el precio total de cada fruta
    for (let index = 0; index < ArrayFrutas.length; index++) {
        
        if(ArrayObjetos[index].Kilos > 0){
            textarea.value += "Nombre: " + ArrayObjetos[index].Nombre + " " + "Cantidad: " + ArrayObjetos[index].Kilos+ " " + "Precio: " + ArrayObjetos[index].Precio + " " + "Precio total: " + (ArrayObjetos[index].Kilos*ArrayObjetos[index].Precio) + "\n";

            
            Total += (ArrayObjetos[index].Precio * ArrayObjetos[index].Kilos);
            kgtotal += ArrayObjetos[index].Kilos;
            
        }
        ArrayObjetos[index].Kilos = 0;
            
    }
    
   
    
    //Calcula el precio medio
    precioMedio = Total/kgtotal;  
    
    //Muestra el precio total y el precio medio 
    textarea.value += "Precio total: " + Math.floor(Total.toFixed(2)) + "\n";
    
    textarea.value += "Precio medio: " + precioMedio.toFixed(3);
   
    Total = 0;
    kgtotal = 0
    precioMedio = 0;

    temporizador();


    
}


//A los 10 segundos resetea el div y el textarea
function temporizador(){
    setTimeout(resetear, 10000);
    
}

function resetear(){
    textarea.value = " ";
    mostrar2.innerHTML = " ";
}



//Botón que limpia el formulario
function limpiarFormulario() {
    document.getElementById("reset").reset();
}





