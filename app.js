let listaNumerosSorteados= [];
let numeroMaximo=10;
let numeroSecreto=generarNumeroAleatorio();
console.log(numeroSecreto);
let intentos=1;



function userAttempt() {
  let numeroDeUsuario=parseInt(document.getElementById('valorUsuario').value);
  if(numeroSecreto===numeroDeUsuario){
    asignarTextoElemento('p',`Acertaste en ${intentos} ${(intentos===1) ? 'Vez': 'Veces'}`);
    document.getElementById('reiniciar').removeAttribute('disabled');
  }else {
    if(numeroSecreto>numeroDeUsuario){
      asignarTextoElemento('p','El numero secreto es mayor');
    }else{
      asignarTextoElemento('p','El numero secreto es menor');
    }
    intentos++;
    limpiarCaja();
  }
}

function limpiarCaja(){
  let valorCaja=document.querySelector('#valorUsuario');
  valorCaja.value='';
}

function asignarTextoElemento(elemento,texto){
  let elementoHtml =document.querySelector(elemento);
  elementoHtml.innerHTML=texto;
}
asignarTextoElemento('h1','Juego del Numero secreto');
asignarTextoElemento('p','Indica un Numero del Uno al diez ');


function generarNumeroAleatorio(){
  let numeroGenerado=Math.floor(Math.random()*numeroMaximo)+1;
  //Si el numero generado esta incluido en la lista 
  if(listaNumerosSorteados.length==numeroMaximo){
    asignarTextoElemento('p','Se ha alcanzado el numero maximo de numeros sorteados');
  }else{
     
  if(listaNumerosSorteados.includes(numeroGenerado)){
    return generarNumeroAleatorio();
  }else {
    listaNumerosSorteados.push(numeroGenerado);
    return numeroGenerado;
  }
}
}

function condicionesIniciales(){
  asignarTextoElemento('h1','Juego del Numero secreto');
  asignarTextoElemento('p','Indica un Numero del Uno al diez ');
  numeroSecreto=generarNumeroAleatorio();
  console.log(numeroSecreto);
  intentos=1;
}

function reiniciarJuego(){
  limpiarCaja();
  condicionesIniciales();
  document.querySelector('#reiniciar').setAttribute('disabled','true');

}
