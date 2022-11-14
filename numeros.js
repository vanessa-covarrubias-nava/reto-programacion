export default class Numeros {

    constructor(uno, dos, tres, cuatro, cinco, seis, siete, ocho, nueve){
        this.uno = uno;
        this.dos = dos;
        this.tres = tres;
        this.cuatro = cuatro;
        this.cinco = cinco;
        this.seis = seis;
        this.siete = siete;
        this.ocho = ocho;
        this.nueve = nueve;
    }

    getUno() {
         return "  \n  |\n  |";
    }
    getDos() {
        return " _ \n _|\n|_";
    }
    getTres() {
        return " _\n _|\n _|";
    }
    getCuatro() {
        return "\n|_|\n  |";
    }
    getCinco() {
        return " _ \n|_ \n _|";
    }
    getSeis() {
        return " _ \n|_ \n|_|";
    }
    getSiete() {
        return " _ \n  |\n  |";
    }
    getOcho() {
        return " _ \n|_|\n|_|";
    }
    getNueve() {
        return " _ \n|_|\n _|";
    }


}

    /** const uno = "  |\n  |\n  |";
*/
