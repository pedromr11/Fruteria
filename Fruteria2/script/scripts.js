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


function frutitas(num){  
    
    
    pedir = prompt("¿Cuántos kilos quieres");


    ArrayKilos[num] = parseInt(pedir);


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

    ArrayObjetos[num] = fruta;
    
}


function mostrar(){
    let textarea = document.getElementById("resultado");
    
    textarea.value = " ";
   
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

    textarea.value = "Fecha de compra: " + fecha.toLocaleString() + "\n";

    for (let index = 0; index < ArrayFrutas.length; index++) {
        
        if(ArrayObjetos[index].Kilos > 0){
            textarea.value += "Nombre: " + ArrayObjetos[index].Nombre + " " + "Cantidad: " + ArrayObjetos[index].Kilos+ " " + "Precio: " + ArrayObjetos[index].Precio + " " + "Precio total: " + (ArrayObjetos[index].Kilos*ArrayObjetos[index].Precio) + "\n";

            
            Total += (ArrayObjetos[index].Precio * ArrayObjetos[index].Kilos);
            kgtotal += ArrayObjetos[index].Kilos;
            
        }
        ArrayObjetos[index].Kilos = 0;
            
    }
    
   
    

    precioMedio = Total/kgtotal;  
    

    textarea.value += "Precio total: " + Math.floor(Total.toFixed(2)) + "\n";
    
    textarea.value += "Precio medio: " + precioMedio.toFixed(3);
   
    Total = 0;
    kgtotal = 0
    precioMedio = 0;

}



