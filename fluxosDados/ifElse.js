const args = process.argv //Argumentos de entrada na execução
const saldo = args[args.length - 1]
console.log('args', args)
console.log('saldo', saldo)

if(isNaN(saldo)){
    console.log("Não numero")
}else{
    console.log("É numero")
}

const idade = 18;
const resultado = idade >= 18 ? "Pode dirigir" : "Não pode dirigir";
console.log(`Ele tem ${idade} anos e ${resultado}`);