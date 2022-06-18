//Filtrar los elementos de un arreglo de números,
//cuyo valor sean mayor que el numero recibido, 
//los elementos filtrados se deben guardar en nuevo arreglo

var arrangement: number[] = [1, 2, 3, 4, 5, 6];
var newArrangement: number[] = [];
var numero: number = 4;
for (var i = 0; i < arrangement.length; i++) {
    if (arrangement[i] > numero) {
        newArrangement.push(arrangement[i]);
    }
}
console.log('El arreglo original es: ' + arrangement);
console.log('El arreglo filtrado es: ' + newArrangement);