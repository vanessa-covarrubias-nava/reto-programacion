import Numeros from "./numeros.js"

let numero = "121233";
numero.split();

let arrNumeros = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];


let arrResult = new Array();

for(let i = 0; i < numero.length; i++){
    let x = numero[i];
    arrResult.push(arrNumeros[x])
}

console.log(...arrResult)
console.log("  \n  |\n  | ")
document.getElementById('resultado').textContent = arrResult.join("");

