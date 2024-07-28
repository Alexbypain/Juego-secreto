/*
//Ejercicio 1

let altura=parseFloat(prompt('Digite su altura en metros'));
let peso=parseFloat(prompt('Digite su peso en Kilogramos'));
let Indice=calcularIndiceMasaCorporal(altura,peso);

console.log(Indice);

alert(`Su indice de masa corporal es ${Indice}`);

function calcularIndiceMasaCorporal(altura,peso){
    let IMC=parseFloat(peso/(altura*altura));
    return IMC

}

//Ejercicio 2

let numeroFactorial=parseInt(prompt('Digite un numero'));

function calcularFactorial(numero){
    let factorial=1
    if(numero>0){
        while(numero>1){
            factorial=factorial*numero;
            numero=numero-1;
        }
        return factorial
}else{
    return `el numero debe ser mayor a 0`

}
}
let factorial=calcularFactorial(numeroFactorial);
alert(`El numero factorial es ${factorial}`);

*/

// Ejercicio 3
/*
let dolar=parseFloat(prompt("Digite el valor en dolares que desea convertir a reales"));

let reales=obtenerReales(dolar);

alert(`Sus ${dolar} en reales son ${reales}`);


function obtenerReales(dolar){
    let reales=parseFloat(dolar*4.8);
    return reales
}

//Ejercicio 4 

let anchura=parseInt(prompt("Digite la anchura de su sala"));
let altura=parseInt(prompt("Digite la altura de su sala"));

area=obtenerArea(altura,anchura);
alert(`El area de su casa es de ${area}`);


function obtenerArea(altura,anchura) {

    let area =anchura*altura;
    return area

    
}
*/
//Ejercicio 5

let radio=parseFloat(prompt("Digite el radio del circulo"));

const{area,perimetro}=obtenerAreaCirculo(radio);
alert(`El area del circulo ${area}`);
alert(`El perimetro del circulo es ${perimetro}`);


function obtenerAreaCirculo(radio) {
    let area=parseFloat(3.14*radio*radio);
    let perimetro=parseFloat(2*3.14*radio);
    return {area, perimetro};
    
}

//Ejercicio 6

let numero=parseInt(prompt("Digite un numero para realizar la tabla de multiplicar"));
tablaMultiplicar(numero);

function tablaMultiplicar(numero){
    let c=1;
    while(c<=10){
        multiplo=numero*c;
        alert(`${numero} multiplicado por ${c} es igual a ${multiplo}`);
        c++;
    }
}