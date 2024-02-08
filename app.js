let numeroSecreto = 0;
let intentos = 0;
let listaNumero = [];
let numeroMaximo = 10;
function asignarTextoElemento(elemento,texto) {
    let ElementoHtml = document.querySelector (elemento);
    ElementoHtml.innerHTML = texto;
    
}

function intetoDeUsuario(){
    let numeroUsuario = parseInt (document.getElementById('valorUsuario').value);
    if (numeroUsuario === numeroSecreto){
        asignarTextoElemento('p',`Acertaste el numero en ${intentos} ${(intentos === 1)? 'vez': 'veces' }` );
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else { 
        if (numeroUsuario > numeroSecreto ){
            asignarTextoElemento('p','El numero secreto es menor');
        } else {
            asignarTextoElemento('p','El numero secreto es mayor.');
        }
     intentos++;
     limpiar();
    }
    return;
}
 function limpiar() {
 document.querySelector('#valorUsuario').value = '';;

 }

 function condicionesJuego (){
    asignarTextoElemento ('h1','Juego del numero secreto');
    asignarTextoElemento ('p',`Indique un Numero del 1 al ${numeroMaximo}.`);
    numeroSecreto = generarNumero ();
    intentos=1;
 }
function reiniciarJuego() {
    //limpiar caja
    limpiar();
    //mensajes del juego
    //numero aleatoreo
    //numero de intentos
    condicionesJuego  ();
    //Desabilitar el boton.
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
}
condicionesJuego(); 
function generarNumero() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    console.log(numeroGenerado);
    console.log(listaNumero);

    if(listaNumero.length == numeroMaximo){
     asignarTextoElemento('p','Ya se sortearon todos los numeros');
    }else {
        //si el numero generado esta  incluido en la lista.
    if (listaNumero.includes(numeroGenerado)) {
        return generarNumero ();
 
    }else {
        listaNumero.push(numeroGenerado);
        return numeroGenerado;
    }
    }
    
}

