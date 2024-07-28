
//Ejercicio 1
let listaGenerica=[];
//Ejercicio 2
let lenguagesDeProgramacion=["JavaScript", "C", "C++", "Kotlin", "Python"];
//ejercicio 3
lenguagesDeProgramacion.push( "Java", "Ruby" ,"GoLang");
//ejercicios 4
elementosLista(lenguagesDeProgramacion);
function elementosLista(lenguagesDeProgramacion){
    console.log(lenguagesDeProgramacion);
}

//ejercicio 5
elementosListaReversa(lenguagesDeProgramacion);
function elementosListaReversa(lenguagesDeProgramacion){
    console.log(lenguagesDeProgramacion.reverse());
}

//ejercicio 6
let listaPromedio=[1,2,3,4,5,6,7,8,9,10];
let promedioFinal=promedioLista(listaPromedio);
alert(`El promedio de la lista es ${promedioFinal}`);

function promedioLista(lista){
    let c=1;
    let suma=0;
    while(c<=10){
        let numero=c-1;
        suma=suma+parseInt(lista[numero]);
        c=c+1;
    }
    let promedio=parseFloat(suma/(lista.length));
    return promedio
}

//Ejercicio 7
const{numero1,numero2}=numeroMaximo(listaPromedio);
alert(`el numero mayor es ${numero1} y el numero menor es ${numero2}`);
function numeroMaximo(lista){
    let c=1;
    let numero1=lista[c-1];
    console.log(numero1);
    let numero2=lista[c-1];
    console.log(numero2);
    while(c<lista.length){
        if(numero1<lista[c]){
            numero1=lista[c];
        }
        
        if(numero2>lista[c]){
            numero2=lista[c];
        }
        c++;

    }
    console.log(numero1,numero2);
    return {numero1,numero2};
}

//Ejercicio 8

suma=realizarSuma(listaPromedio);
alert(`El resultado de la suma es ${suma}`);

function realizarSuma(lista) {
    let suma=0;
    let c=0;
    while(c<=lista.length){
        suma=suma+lista[c];
        c++;
    }
    return suma
    
}