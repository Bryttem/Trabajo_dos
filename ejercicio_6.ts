//Agregar prefijo de Srta, si es mujer o Sr, si es hombre

 var arreglo = [{ nombre: 'Juan', sexo: 'M' }, { nombre: 'Matha', sexo: 'F' }, { nombre: 'Bryttem', sexo: 'M' }, { nombre: 'Sophia', sexo: 'F' }, { nombre: 'Sophia', sexo: 'F' }];

    var newArreglo = [];

    for (var i = 0; i < arreglo.length; i++) { 

        if (arreglo[i].sexo == 'M') { 
            newArreglo.push({ nombre: 'Sr. ' + arreglo[i].nombre }); 
        } else {
            newArreglo.push({ nombre: 'Srta. ' + arreglo[i].nombre }); 
        }
    }

    console.log(arreglo);
    console.log(newArreglo);