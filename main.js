import Numeros from "./numeros.js"

const input = promp();


class Main {
    

    uno() {
        let uno = new Numeros();
        console.log(uno.getUno());
    }
    dos(){
        let dos = new Numeros();
        console.log(dos.getDos());
    }
    tres(){
        let tres = new Numeros();
        console.log(tres.getTres());
    }
    cuatro(){
        let cuatro = new Numeros();
        console.log(cuatro.getCuatro());
    }
    cinco(){
        let cinco = new Numeros();
        console.log(cinco.getCinco());
    }
    seis(){
        let seis = new Numeros();
        console.log(seis.getSeis());
    }
    siete(){
        let siete = new Numeros();
        console.log(siete.getSiete());
    }
    ocho(){
        let ocho = new Numeros();
        console.log(ocho.getOcho());
    }
    nueve(){
        let nueve = new Numeros();
        console.log(nueve.getNueve());
    }


}

let app = new Main;
if(input.includes("1"), 0){
app.uno();
}
app.dos();
app.tres();
app.cuatro();
app.cinco();
app.seis();
app.siete();
app.ocho();
app.nueve();