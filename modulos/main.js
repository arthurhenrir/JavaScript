const Matematica = require('./matematica')
console.log(Matematica.somar(1,4))
const readline = require('readline')
const terminal = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

terminal.question('Insira o primeiro valor\n', valor1 => {
    terminal.question('Insira o segundo valor\n', valor2 => {
        terminal.question('Qual operacao deseja fazer?\n', tipoOperacao => {
            if(validaOperacao(tipoOperacao)){
                const resultado = Matematica[tipoOperacao](Number(valor1), Number(valor2))
                console.log(`A operacao ${tipoOperacao} de ${valor1} por ${valor2} é ${resultado}`)
                terminal.close()
            }else{
                console.log("Operação inválida")
                terminal.close()
            }
            
        })
    })
})

const validaOperacao = (tipoOperacao) => {
    switch(tipoOperacao){
        case "somar":
            return true;
        case "subtrair":
            return true;
        default:
            return false;
    }  
}
