// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto) {
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa
  // un par clave-valor en forma de matriz.
  //Ejemplo:
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  return Object.entries(objeto);
}

function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
  //Escribe tu código aquí
  var str = string.split("");
  var unicos = [];
  for (let i = 0; i < str.length; i++) {
    if (unicos.includes(str[i])) continue;
    else unicos.push(str[i]);
  }
  var res = {};
  for (let i = 0; i < unicos.length; i++) {
    count = 0;
    for (let x = 0; x < str.length; x++) {
      if (unicos[i] == str[x]) count++;
    }
    res[unicos[i]] = count;
  }
  return res;
}

function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  var may = "";
  var min = "";
  for (let i = 0; i < s.length; i++) {
    if (s[i].toUpperCase() == s[i]) may += s[i];
    else min += s[i];
  }
  return may + min;
}

function asAmirror(str) {
  //La función recibe una frase.
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
<<<<<<< HEAD
  var array = str.split(" ");
  var new_array = [];
  for (let i = 0; i < array.length; i++) {
    new_array.push(array[i].split("").reverse().join(""));
  }
  return new_array.join(" ");
=======
>>>>>>> 6d2c8b62f6fc80d9bce55d01ad3be4abfe76f90c
}

function capicua(numero) {
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  str = numero.toString();
  var es_capicua = true;
  for (let i = 0; i < str.length / 2; i++) {
    if (str[i] != str[str.length - i - 1]) {
      es_capicua = false;
      break;
    }
  }
  if (es_capicua) return "Es capicua";
  else return "No es capicua";
}

function deleteAbc(cadena) {
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  array = cadena.split("");
  discard = ["a", "b", "c"];
  res = "";
  array.forEach(function (elem, index) {
    if (!discard.includes(elem)) res += elem;
  });
  return res;
}

function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  /* function compareStrings(a, b) {
    return a.length - b.length;
  } */
  return arr.sort((a, b) => a.length - b.length);
}

function buscoInterseccion(arreglo1, arreglo2) {
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí
<<<<<<< HEAD
  res = [];
  arreglo1.forEach(function (elem) {
    if (arreglo2.includes(elem)) res.push(elem);
  });
  return res;
=======
>>>>>>> 6d2c8b62f6fc80d9bce55d01ad3be4abfe76f90c
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  deObjetoAmatriz,
  numberOfCharacters,
  capToFront,
  asAmirror,
  capicua,
  deleteAbc,
  sortArray,
  buscoInterseccion,
};
