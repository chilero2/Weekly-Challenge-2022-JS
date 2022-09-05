/*
 * Reto #9
 * CÓDIGO MORSE
 * Fecha publicación enunciado: 02/03/22
 * Fecha publicación resolución: 07/03/22
 * Dificultad: MEDIA
 *
 * Enunciado: Crea un programa que sea capaz de transformar texto natural a código morse y viceversa.
 * - Debe detectar automáticamente de qué tipo se trata y realizar la conversión.
 * - En morse se soporta raya "—", punto ".", un espacio " " entre letras o símbolos y dos espacios entre palabras "  ".
 * - El alfabeto morse soportado será el mostrado en https://es.wikipedia.org/wiki/Código_morse.
 *
 * Información adicional:
 * - Usa el canal de nuestro discord (https://mouredev.com/discord) "🔁reto-semanal" para preguntas, dudas o prestar ayuda a la acomunidad.
 * - Puedes hacer un Fork del repo y una Pull Request al repo original para que veamos tu solución aportada.
 * - Revisaré el ejercicio en directo desde Twitch el lunes siguiente al de su publicación.
 * - Subiré una posible solución al ejercicio el lunes siguiente al de su publicación.
 *
 */
const isMorse = (text) => {
  const regexLetterNumber = /[A-Za-z0-9]/;
  return !/\w/.test(text);
};

const codeMorse = {
  a: ".-",
  b: "-...",
  c: "-.-.",
  ch: "----",
  d: "-..",
  e: ".",
  f: "..-.",
  g: "--.",
  h: "....",
  i: "..",
  j: ".---",
  k: "-.-",
  l: ".-..",
  m: "--",
  n: "-.",
  ñ: "--.--",
  o: "---",
  p: ".--.",
  q: "--.-",
  r: ".-.",
  s: "...",
  t: "-",
  u: "..-",
  v: "...-",
  w: ".--",
  x: "-..-",
  y: "-.--",
  z: "--..",
  1: ".----",
  2: "..---",
  3: "...--",
  4: "....-",
  5: ".....",
  6: "-....",
  7: "--...",
  8: "---..",
  9: "----.",
  0: "-----",
  ".": ".-.-.-",
  ",": "--..--",
  "?": "..--..",
  '"': ".-..-.",
  "/": "--..-.",
  morseToText(morse) {
    for (const key in this) {
      if (this[key] === morse) return key;
    }
  },
  textToMorse(text) {
    for (const key in this) {
      if (key === text) return this[key];
    }
  },
};

const morseCodeConversor = (text) => {
  let show = "";

  if (isMorse(text)) {
    const matText = text.split(" ");
    for (const code of matText) {
      if (code === "") show += " ";
      else show += codeMorse.morseToText(code);
    }
    return show;
  } else {
    for (let i = 0; i < text.length; i++) {
      if (text[i] === " ") show += " ";
      else
        show +=
          codeMorse.textToMorse(text[i].toLowerCase()) + " ";
    }
    return show;
  }
};

console.log(morseCodeConversor("Hola como estas?"));
