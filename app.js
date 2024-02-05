/*
let parrafo = document.querySelector('p');
parrafo.innerHTML = 'Indica un numero del 1 al 10';*/
let numeroSecreto = generaNumeroSecreto;
function asignarTextoElmento(elemento, texto){
    let elementoHTML = document.querySelector(elemento)
    elementoHTML.innerHTML = texto;
}

asignarTextoElmento('h1','juego del numero secreto!!');
asignarTextoElmento('p','indica un numero entre el 1 y el 10')

function  verificarIntento(){
    let numeroDeUsuario = document.querySelector('input');
    return;
}

function intentoUsuario(){
    alert('click desde el boton');
    return;
}
function generaNumeroSecreto(){
    return Math.floor(Math.random()*10+1);
  
}
