/*
 * Reto #10
 * EXPRESIONES EQUILIBRADAS
 * Fecha publicación enunciado: 07/03/22
 * Fecha publicación resolución: 14/03/22
 * Dificultad: MEDIA
 *
 * Enunciado: Crea un programa que comprueba si los paréntesis, llaves y corchetes de una expresión están equilibrados.
 * - Equilibrado significa que estos delimitadores se abren y cieran en orden y de forma correcta.
 * - Paréntesis, llaves y corchetes son igual de prioritarios. No hay uno más importante que otro.
 * - Expresión balanceada: { [ a * ( c + d ) ] - 5 }
 * - Expresión no balanceada: { a * ( c + d ) ] - 5 }
 *
 * Información adicional:
 * - Usa el canal de nuestro discord (https://mouredev.com/discord) "🔁reto-semanal" para preguntas, dudas o prestar ayuda a la comunidad.
 * - Puedes hacer un Fork del repo y una Pull Request al repo original para que veamos tu solución aportada.
 * - Revisaré el ejercicio en directo desde Twitch el lunes siguiente al de su publicación.
 * - Subiré una posible solución al ejercicio el lunes siguiente al de su publicación.
 *
 */

const symbol = {
    '{': '}',
    '(': ')',
    '[': ']',
    isOpen(character) {
        return character in this
    },
    isClose(character) {
        for (const key in this) {
            if (this[key] === character) return true
        }
        return false
    },
    getKey(character) {
        for (const key in this) {
            if (this[key] === character) return key                               
        }
        return undefined
    }
}

const isBalanced = (expression) => {
  let matExpression = expression.split("");
  let index = 0;
  while (index < matExpression.length) {
    const character = matExpression[index]
    if (symbol.isClose(character)) {
      return "expresión no balanceada";
    }
    if (symbol.isOpen(character)) {
      const closeSymbol = symbol[character];
      if (matExpression.indexOf(closeSymbol) === -1)
        return "expresión no balanceada";
      else {
        let mat = [];
        let lastIndex = matExpression.lastIndexOf(closeSymbol)
        for (let i = index + 1; i < lastIndex; i++) {
          if (symbol.isOpen(matExpression[i])) mat.push(matExpression[i]);
          else if (symbol.isClose(matExpression[i])) {
            if (matExpression[i] === closeSymbol && mat.length === 0) lastIndex = i
            else if (!mat.some(elem => elem === symbol.getKey(matExpression[i])))
              return "expresión no balanceada";
            else mat.splice(mat.indexOf(symbol.getKey(matExpression[index])), 1);
          }
        }
        if (mat.length != 0) return "expresión no balanceada";
        matExpression.splice(matExpression.indexOf(closeSymbol), 1);
        matExpression.splice(index, 1);
      }
    }
    else index++   
   
  }
  return "expresión balanceada";
};

console.log(isBalanced("{ a * ( c + d )  - 5 }"));
console.log(isBalanced("{a + b [c] * (2x2)}"))
console.log(isBalanced("{ [ a * ( c + d ) ] - 5 }"))
console.log(isBalanced("{ a * ( c + d )  - 5 }"))
console.log(isBalanced("{a^4 + (ax4)}"))
console.log(isBalanced("{ a * ( c + d ) + ( 2 - 3 ) - 5 }"))
console.log(isBalanced("{{{{{{}}}}}}"))
console.log(isBalanced("(a)"))
