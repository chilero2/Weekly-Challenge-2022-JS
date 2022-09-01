/*
 * Reto #4
 * ÁREA DE UN POLÍGONO
 * Fecha publicación enunciado: 24/01/22
 * Fecha publicación resolución: 31/01/22
 * Dificultad: FÁCIL
 *
 * Enunciado: Crea UNA ÚNICA FUNCIÓN (importante que sólo sea una) que sea capaz de calcular y retornar el área de un polígono.
 * - La función recibirá por parámetro sólo UN polígono a la vez.
 * - Los polígonos soportados serán Triángulo, Cuadrado y Rectángulo.
 * - Imprime el cálculo del área de un polígono de cada tipo.
 *
 * Información adicional:
 * - Usa el canal de nuestro discord (https://mouredev.com/discord) "🔁reto-semanal" para preguntas, dudas o prestar ayuda a la acomunidad.
 * - Puedes hacer un Fork del repo y una Pull Request al repo original para que veamos tu solución aportada.
 * - Revisaré el ejercicio en directo desde Twitch el lunes siguiente al de su publicación.
 * - Subiré una posible solución al ejercicio el lunes siguiente al de su publicación.
 *
 */

class Poligono {
  constructor(base, altura) {
    this.base = base;
    this.altura = altura;
  }

  imprimeArea() {
    console.log(`El área es ${this.calculaArea()}m2`);
  }
}

class Triangulo extends Poligono {
  calculaArea() {
    return (this.base * this.altura) / 2;
  }
}

class Cuadrado extends Poligono {
  calculaArea() {
    return this.base * this.base;
  }
}

class Rectangulo extends Poligono {
  calculaArea() {
    return this.base * this.altura;
  }
}

const triangulo = new Triangulo(2, 4);
const cuadrado = new Cuadrado(4);
const rectangulo = new Rectangulo(2, 4);

triangulo.imprimeArea();
cuadrado.imprimeArea();
rectangulo.imprimeArea();
