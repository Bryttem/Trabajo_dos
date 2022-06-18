//Sumar todos los elementos de un arreglo de números cuyo valor sean mayor al numero recibido

var arrangement: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var newArrangement: number[] = [];
var numero: number = 4;
for (var i = 0; i < arrangement.length; i++) {
    if (arrangement[i] > numero) {
        newArrangement.push(arrangement[i]);
    }
}
console.log('El arreglo original es: ' + arrangement);
console.log('El arreglo filtrado es: ' + newArrangement);
var suma: number = 0; if (newArrangement.length > 0) {    for (var i = 0; i < newArrangement.length; i++) {
    suma += newArrangement[i];
}
console.log('La suma de los elementos del arreglo es: ' + suma);
}
else {
console.log('El arreglo vacio');
}