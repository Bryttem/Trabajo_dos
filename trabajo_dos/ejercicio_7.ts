//validar si una palabra es palíndromo

let word = "Rayar";

if (word == word.split("").reverse().join("")) {
    console.log("Esta palabra se escribe igual al derecho y al revés");
    }
    else {
        console.log("Esta palabra no se escribe igual al derecho y al revés");
    }
