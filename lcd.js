

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let numero = "";


rl.question('Ingresa un número: ', (numeroIngresado) => {
  numero = numeroIngresado.toString();
  numero.split();
  rl.close();

  displayLCD();
  // A partir de aquí, 'numero' es un arreglo que contiene los dígitos del número.
});




let cero = [[" ", "_", " "], 
            ["|", " ", "|"], 
            ["|", "_", "|"]
        ];
        
let uno = [[" ", " ", " "],
           [" ", " ", "|"], 
           [" ", " ", "|"]
        ];

let dos = [[" ", "_", " "], 
           [" ", "_", "|"], 
           ["|", "_", " "]
        ];

let tres = [[" ", "_", " "], 
            [" ", "_", "|"], 
            [" ", "_", "|"]
        ];

let cuatro = [[" ", " ", " "], 
              ["|", "_", "|"], 
              [" ", " ", "|"]
            ];

let cinco = [[" ", "_", " "], 
             ["|", "_", " "], 
             [" ", "_", "|"]
            ];

let seis = [[" ", "_", " "], 
            ["|", "_", " "], 
            ["|", "_", "|"]
        ];

let siete = [[" ", "_", " "], 
             [" ", " ", "|"], 
             [" ", " ", "|"]
            ];

let ocho = [[" ", "_", " "], 
            ["|", "_", "|"], 
            ["|", "_", "|"]
        ];

let nueve = [[" ", "_", " "], 
             ["|", "_", "|"], 
             [" ", "_", "|"]
            ];

let arrNumeros = [cero, uno, dos, tres, cuatro, cinco, seis, siete, ocho, nueve]

let lcdNum1 = new Array();
let lcdNum2 = new Array();
let lcdNum3 = new Array();

function displayLCD() {
    const lcdNum1 = [];
    const lcdNum2 = [];
    const lcdNum3 = [];
  
    for (let i = 0; i < numero.length; i++) {
      let a = numero[i];
      let x = arrNumeros[a][0].join("");
      lcdNum1.push(x);
  
      let y = arrNumeros[a][1].join("");
      lcdNum2.push(y);
  
      let z = arrNumeros[a][2].join("");
      lcdNum3.push(z);
    }
  
    console.log(lcdNum1.join("") + "\n" + lcdNum2.join("") + "\n" + lcdNum3.join(""));
  }
 
  
  
  
  
