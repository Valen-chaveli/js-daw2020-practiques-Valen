'use strict';

function Punto(x, y) {
  //Compruebo si es un numero
  if (isNaN(x) || isNaN(y)) {
    this.x = 0;
    this.y = 0;
  } else {
    this.x = x;
    this.y = y;
  }

  this.copiar = () => {
    //Creo un nuevo punto con las coordenadas del punto actual y lo retorno
    return new Punto(this.x, this.y);
  };

  this.cambiar = (x2, y2) => {
    this.x = x2;
    this.y = y2;
  };

  //Accedo a las propiedades del punto pasado y se las sumo a las del objeto desde el que se llama
  this.suma = (punto2) => {
    return new Punto(punto2.x + this.x, punto2.y + this.y);
  };

  this.mostrarCoordenadas = () => this.x + ' | ' + this.y;
}

var p = new Punto(5, 10);
var p2 = new Punto(2, 4);
var pCopia = p.copiar();

var p3 = new Punto(10, 20);
var puntoSuma = p.suma(p3);

alert('La suma X de los puntos es ' + puntoSuma.x);
alert('La suma y de los puntos es ' + puntoSuma.y);
var nuevoPuntoSuma = alert(pCopia.mostrarCoordenadas());
alert(p.mostrarCoordenadas());

//La zona de prototipo es una zona que comparten todos los objetos de ese prototipo
//Si modificamos el prototipo de Punto todos los objetos de punto tendran esa nueva propiedad o metodo
console.log(Punto.__proto__);
