'use strict';

//Defino las constantes y las variables
const arrayPalabras = [];
var palabra = '';
var valorIndefinido = false;
var contadorPalabraRepetida = 1;
var contador = 1;

do {
  palabra = prompt('Escribe una serie de palabras');

  //Agrego la palabra al array
  arrayPalabras.push(palabra);

  //Recorro el array
  for (let index = 0; index < arrayPalabras.length; index++) {
    //Si la cadena esta vacia indefinido pasa a TRUE y se elimina del array
    if (arrayPalabras[index] == '') {
      //Se elimina para no afectar al ordenamiento posterior
      arrayPalabras.pop();
      valorIndefinido = true;
    }

    //Si esta nulo es que se ha cancelado el popup
    if (arrayPalabras[index] === null) {
      //Se elimina para no afectar al ordenamiento posterior
      arrayPalabras.pop();
      valorIndefinido = true;
    }
  }

  //Si se establece un valor vacio o indefinido sale del bucle
} while (valorIndefinido != true);

palabrasRepetidas(arrayPalabras);

function palabrasRepetidas(arrayPalabras) {
  var palabra2 = '';

  //Creo un mapa
  const mapa = new Map();

  //Recorro el array
  for (let index = 0; index < arrayPalabras.length; index++) {
    //Guardo cada palabra del array
    palabra2 = arrayPalabras[index];

    //Vuelvo a recorrer el array para compara cada palabra
    for (let j = 0; j < arrayPalabras.length; j++) {
      //Guardo la palabra
      var palabra3 = arrayPalabras[j];

      //Comparo si se repite
      if (palabra2 == palabra3) {
        //Si se repite la palabra aumento el contador
        contadorPalabraRepetida++;

        //Pongo en el mapa la clave y el valor(veces que se repite)
        mapa.set(arrayPalabras[index], contadorPalabraRepetida);
      } else {
        //Si no se repite entonces solo contiene la palabra 1 vez
        mapa.set(arrayPalabras[index], 1);
      }
    }

    //Reinicio el contador para cada palabra que se analiza
    contadorPalabraRepetida = 0;
  }

  //Muestro el mapa
  console.log('-----------');
  console.log(mapa);
  console.log('-----------');
}
