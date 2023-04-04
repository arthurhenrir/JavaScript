let roda = true;
let contador = 0

while(roda) {
    roda = contador < 10
    if(contador % 2 === 0){
        console.log('Numero par', contador)
    }
    contador++;
}

do{
    console.log("uma vez rodado")
    roda = false

}while(roda);