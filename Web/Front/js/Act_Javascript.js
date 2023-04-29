// 1

function firstNonRepeatedChar(str) {
    const charCount = {};
    for (let i = 0; i < str.length; i++) {
      const char = str[i];
      if (charCount[char] >= 1){
        charCount[char]= charCount[char] + 1;
      }
      else{
        if (charCount[char] = 0)
        charCount[char] = 1;
      }
    }
    
    for (let i = 0; i < str.length; i++) {
      const char = str[i];
      if (charCount[char] === 1) {
        return char;
      }
    }
    return null;
}

const str = 'abacddbec';
console.log(firstNonRepeatedChar(str)); 

//2
function bubbleSort(array) {
    let longitud = array.length;
    for(let i = 0; i < longitud; i++){
        for(let j = 0; j < longitud - 1; j++){
            if(array[j] > array[j +1]){
                let aux = array[j];
                array[j] = array[j + 1];
                array[j + 1] = aux;
            }
        }
    }
    return array;
}

console.log(bubbleSort([2, 8, 5, 3, 9, 4, 1]));

// 3

function invertirArreglo(arr) {
    let nuevoArr = [];
    for (let i = arr.length - 1; i >= 0; i--) {
      nuevoArr.push(arr[i]);
    }
    return nuevoArr;
}

function invertirArregloMod(arr) {
    for (let i = 0; i < arr.length / 2; i++) {
      let temp = arr[i];
      arr[i] = arr[arr.length - 1 - i];
      arr[arr.length - 1 - i] = temp;
    }
}

let arreglo = ([1, 2, 3, 4, 5, 6, 7, 8, 9])
console.log(invertirArreglo(arreglo));
console.log(invertirArregloMod(arreglo));
console.log(arreglo);

// 4

function capitalizarPalabras(cadena) {
    return cadena.split(' ') .map(function(word) {
        return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(' ');
}

// 5 

function calcularMCD(a, b) {
    let r = 0;
    while (b !== 0) {
      r = a % b;
      a = b;
      b = r;
    }
    return a;
}

// 6 

function hackerSpeak(str) {
    let hackerStr = "";
    for (let i = 0; i < str.length; i++) {
      switch (str[i]) {
        case "a":
          hackerStr += "4";
          break;
        case "e":
          hackerStr += "3";
          break;
        case "i":
          hackerStr += "1";
          break;
        case "o":
          hackerStr += "0";
          break;
        case "s":
          hackerStr += "5";
          break;
        default:
          hackerStr += str[i];
      }
    }
    return hackerStr;
}

// 7

function factoriza(n) {
    let factors = [];
  
    for (let i = 1; i <= n; i++) {
      if (n % i === 0) {
        factors.push(i);
      }
    }
  
    return factors;
}
  
// 8

function quitaDuplicados(arr) {
    let resultado = [];
    for (let i = 0; i < arr.length; i++) {
        if (!resultado.includes(arr[i])) {
            resultado.push(arr[i]);
        }
    }
    return resultado;
}

function quitaDuplicados(arr) {
    let resultado = [];
    const charC = {};
    for (let i = 0; i < arr.length; i++) {
      if (!charC[arr[i]]) { 
        resultado.push(arr[i]);
        charC[arr[i]] = 1; 
      }
    }
    return resultado;
}
  
console.log(quitaDuplicados([1, 0, 1, 1, 0, 0])); // [1, 0]

// 9

function longitudMasCorta(lista) {
    let longitudMinima = lista[0].length;
    for (let i = 1; i < lista.length; i++) {
      if (lista[i].length < longitudMinima) {
        longitudMinima = lista[i].length;
      }
    }
    return longitudMinima;
}

// 10

function esPalindromo(cadena) {
    const cadenaLimpia = cadena.toLowerCase().replace(/\s/g, '');
    return cadenaLimpia === cadenaLimpia.split('').reverse().join('');
}

// 11

function ordenarAlfabeticamente(lista) {
    return lista.sort();
}

// 12

function medianaYModa(lista) {
    lista.sort((a, b) => a - b);
  
    const mitad = Math.floor(lista.length / 2);
    let mediana;
    if (lista.length % 2 === 0) {
      mediana = (lista[mitad - 1] + lista[mitad]) / 2;
    } else {
      mediana = lista[mitad];
    }
  
    let moda = null;
    let frecuenciaMaxima = 0;
    let frecuencias = {};
    for (let i = 0; i < lista.length; i++) {
      const numero = lista[i];
      if (!frecuencias[numero]) {
        frecuencias[numero] = 0;
      }
      frecuencias[numero]++;
  
      if (frecuencias[numero] > frecuenciaMaxima) {
        moda = numero;
        frecuenciaMaxima = frecuencias[numero];
      }
    }
  
    return { mediana, moda };
}

// 13

function cadenaMasFrecuente(listaCadenas) {
    let cadenaFrecuente = '';
    let maxFrecuencia = 0;
    let frecuencias = {};
  
    for (let i = 0; i < listaCadenas.length; i++) {
      let cadena = listaCadenas[i];
      if (frecuencias[cadena]) {
        frecuencias[cadena] += 1;
      } else {
        frecuencias[cadena] = 1;
      }      
      if (frecuencias[cadena] > maxFrecuencia) {
        maxFrecuencia = frecuencias[cadena];
        cadenaFrecuente = cadena;
      }
    }
  
    return cadenaFrecuente;
}
  
// 14

function potencia(n) {
    if (n == 1){
        return true
    }
    else {
        if(n%2 == 0){
            return potencia(n/2)
        }
        else{
            return false
        }
    }
}

console.log(potencia(121))

// 15

function ordenarDescendente(lista) {
    return lista.sort((a, b) => b - a);
}
  