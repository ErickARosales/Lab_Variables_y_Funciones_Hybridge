// Ejercicio 10: Inversión de una Cadena
// Declara una función llamada "invertirCadena" que acepte un parámetro "cadena" y retorne la cadena invertida

// Ejemplos:
// invertirCadena("Hola Mundo") // debe retornar "odnuM aloH"
// invertirCadena("anita lava la tina") // debe retornar "anit al aval atina"

function invertirCadena(cadena) {
    // Escribe tu código aquí
    let invertida = cadena.split('').reverse().join('');
    return invertida;
}

// Exporta la función para que pueda ser utilizada en las pruebas
module.exports = {
    invertirCadena
};
