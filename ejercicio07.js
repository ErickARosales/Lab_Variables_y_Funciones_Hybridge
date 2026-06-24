// Ejercicio 7: Comprobación de Número Par
// Declara una función llamada "esPar" que acepte un parámetro "numero" y retorne verdadero si el número es par, de lo contrario falso

//escribe tu función aquí. Recuerda que el nombre de la función debe ser exactamente "esPar"
function esPar (numero) {
    resto = numero%2;
    if (resto == 1) {
        return False;
    else {
        return True;
    }
}
// Exporta la función para que pueda ser utilizada en las pruebas
module.exports = {
    esPar
};
