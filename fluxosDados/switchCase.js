const readline = require('readline')
const terminal = readline.createInterface({

    input: process.stdin,
    output: process.stdout

})

const textoMenu = `
    1 - Menu
    2 - Menu de heroi
    3 - Menu de guerreiras
    0 - Sair
`

/*console.log(textoMenu)
const opcao = 1
switch(opcao) {
    case 1:
        console.log('Escolheu 1')
        break;
    case 2:
        console.log('Escolheu 2')
        break;
    case 3:
        console.log('Escolheu 3')
        break;
    default:
        console.log('sair')
        break;
}*/

/*terminal.question('Qual o seu nome?', (msg) => {
    console.log('Voce escreveu', msg)
    terminal.close()
})*/

const questoes = {
    menuInicial: {
        texto: textoMenu,
        fn: menuInicial
    }
}

function menuInicial(msg) {
    const opcao = Number(msg)
    if(isNaN(opcao)){
        throw new Error('Não é numero', msg)
    }
    switch(opcao) {
        case 0: 
                console.log('Saindo!')
                terminal.close()
                break;
        case 1: 
                console.log('Menu inicial')
                break;
        case 2: 
                console.log('Menu Heroi')
                break;
        case 3: 
                console.log('Menu Guerreiras')
                break;
        default:
                console.log("Invalido")       
    }
}

terminal.question(
    questoes.menuInicial.texto,
    questoes.menuInicial.fn
)
