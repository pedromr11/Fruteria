let ArrayKilos = [0, 0, 0, 0, 0, 0, 0, 0, 0 ,0];
let ArrayPrecio = [0.80, 1.30, 1.60, 0.90, 3, 4.50, 2.30, 0.60, 0.50, 1.40];
let ArrayFrutas = ["Cereza", "Chirimoya", "Fresa", "Manzana", "Melon", "Naranja", "Pera", "Platano", "Sandia", "Uvas"];
var panoja = 0;

function fcereza(num){
    console.log(num);
    console.log(ArrayPrecio[num]);

    console.log(ArrayKilos[num] ++);
}

function fchirimoya(){
    ArrayInicializar[1] = (++ArrayInicializar[1]);
    panoja = panoja + 1.30;
}

function ffresa(){
    ArrayInicializar[2] = (++ArrayInicializar[2]);
    panoja = panoja + 1.60;
}

function fmanzana(){
    ArrayInicializar[3] = (++ArrayInicializar[3]);
    panoja = panoja + 0.90;
}

function fmelon(){
    ArrayInicializar[4] = (++ArrayInicializar[4]);
    panoja = panoja + 3;
}

function fnaranja(){
    ArrayInicializar[5] = (++ArrayInicializar[5]);
    panoja = panoja + 4.50;
}

function fpera(){
    ArrayInicializar[6] = (++ArrayInicializar[6]);
    panoja = panoja + 2.30;
}

function fplatano(){
    ArrayInicializar[7] = (++ArrayInicializar[7]);
    panoja = panoja + 0.60;
}

function fsandia(){
    ArrayInicializar[8] = (++ArrayInicializar[8]);
    panoja = panoja + 0.50;
}

function fuvas(){
    ArrayInicializar[9] = (++ArrayInicializar[9]);
    panoja = panoja + 1.40;
}

function mostrar(){
    let textarea = document.getElementById("resultado");
    console.log(textarea.value = "1");
    let variable = document.createTextNode();
    textarea.appendChild(variable);
}