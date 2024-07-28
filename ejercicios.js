//Ejercicio 1
mensaje();


function mensaje(){
    console.log("Hola mundo");
}

//Ejercicio 2


nombre=prompt("Digite un nombre");
mensaje2(nombre);
function mensaje2(nombre){
    console.log(`Hola, ${nombre}!`);
}

//Ejercicio 3
numero=parseInt(prompt("Digite un numero"));
dobleNumero(numero);
function dobleNumero(numero){
    dobleNumero=numero*2;
    console.log(`El numero doble es ${dobleNumero}`);
}

//Ejercicio 4

numero1=parseInt(prompt("Digita un numero "));
numero2=parseInt(prompt("Digita un numero "));
numero3=parseInt(prompt("Digita un numero "));

promedio(numero1,numero2,numero3);
function promedio(numero1,numero2,numero3){
    promedio=(numero1+numero2+numero3)/3;
    console.log(`El promedio es ${promedio}`);
}

//Ejercicio 5

numero1b=parseInt(prompt("Digita un numero "));
numero2b=parseInt(prompt("Digita un numero "));

mayor(numero1b,numero2b);

function mayor(numero1,numero2){
    if(numero1>numero2){
        console.log(`el numero mayor es ${numero1}`);
    }else{
        console.log(`el numero mayor es ${numero2}`);
    }
}

//Ejercicio 6
numerob=parseInt(prompt("Digite un numero"));
potencia(numerob);
function potencia(numero){
    resultado=numero*numero;
    console.log(resultado);
}