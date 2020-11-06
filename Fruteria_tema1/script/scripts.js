let ArrayKilos = [0, 0, 0, 0, 0, 0, 0, 0, 0 ,0];
let ArrayPrecio = [0.80, 1.30, 1.60, 0.90, 3, 4.50, 2.30, 0.60, 0.50, 1.40];
let ArrayFrutas = ["Cereza", "Chirimoya", "Fresa", "Manzana", "Melon", "Naranja", "Pera", "Platano", "Sandia", "Uvas"];
let Total = 0;
let kgtotal = 0;
let precioMedio = 0;
let pedir = 0;
let fecha = new Date();



function frutitas(num){  
    
    
    pedir = prompt("¿Cuántos kilos quieres");


    ArrayKilos[num] = parseInt(pedir);

}


function mostrar(){
    let textarea = document.getElementById("resultado");
    
    textarea.value = " ";
   
    textarea.value = "Fecha de compra: " + fecha.toLocaleString() + "\n";

    for (let index = 0; index < ArrayFrutas.length; index++) {
        
        if(ArrayKilos[index] > 0){
            textarea.value += "Nombre: " + ArrayFrutas[index] + " " + "Cantidad: " + ArrayKilos[index]+ " " + "Precio: " + ArrayPrecio[index] + " " + "Precio total: " + (ArrayKilos[index]*ArrayPrecio[index]) + "\n";

            
            Total += (ArrayPrecio[index] * ArrayKilos[index]);
            kgtotal += ArrayKilos[index];
            
        }
        ArrayKilos[index] = 0;
            
    }
    
   
    //Math.floor(Total.toFixed(2))

    precioMedio = Total/kgtotal;  
    

    textarea.value += "Precio total: " + Math.floor(Total.toFixed(2)) + "\n";
    
    textarea.value += "Precio medio: " + precioMedio.toFixed(3);
   
    Total = 0;
    kgtotal = 0
    precioMedio = 0;

}



