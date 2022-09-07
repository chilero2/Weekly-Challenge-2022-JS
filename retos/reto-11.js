/*
 * Reto #11
 * ELIMINANDO CARACTERES
 * Fecha publicación enunciado: 14/03/22
 * Fecha publicación resolución: 21/03/22
 * Dificultad: FÁCIL
 *
 * Enunciado: Crea una función que reciba dos cadenas como parámetro (str1, str2) e imprima otras dos cadenas como salida (out1, out2).
 * - out1 contendrá todos los caracteres presentes en la str1 pero NO estén presentes en str2.
 * - out2 contendrá todos los caracteres presentes en la str2 pero NO estén presentes en str1.
 *
 * Información adicional:
 * - Usa el canal de nuestro discord (https://mouredev.com/discord) "🔁reto-semanal" para preguntas, dudas o prestar ayuda a la comunidad.
 * - Puedes hacer un Fork del repo y una Pull Request al repo original para que veamos tu solución aportada.
 * - Revisaré el ejercicio en directo desde Twitch el lunes siguiente al de su publicación.
 * - Subiré una posible solución al ejercicio el lunes siguiente al de su publicación.
 *
 */

const printNonCommon = (str1, str2) => {
    str1 = str1.toLowerCase()
    str2 = str2.toLowerCase()
    let copyStr1 = ''
    let copyStr2 = ''
    Array.from(str1).forEach((character) => {
        if (str2.indexOf(character) === -1) copyStr1 += character
    })
    Array.from(str2).forEach((character) => {
        if (str1.indexOf(character) === -1) copyStr2 += character
    })
    console.log(`out1: ${copyStr1}`)
    console.log(`out1: ${copyStr2}`)

}

printNonCommon("Hola","hila")