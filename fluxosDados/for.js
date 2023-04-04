/*for(let i = 0; i <= 10; i++){
    const decisao = i % 2 === 0 ? "par" : "impar"
    console.log(`O numero ${i} é ${decisao}`)
}*/

const listaTarefas = [
    {
        id: parseInt(Math.random() * 10),
        nome: 'Zezinho',
        idade: 20
    },
    {
        id: parseInt(Math.random() * 10),
        nome: 'Maria',
        idade: 17
    }
]

/*for(let i = 0; i < listaTarefas.length; i++){
    console.log(`
        ID: ${listaTarefas[i].id},
        nome: ${listaTarefas[i].nome},
        idade: ${listaTarefas[i].idade}
    `)    
}*/

//Não precisa de contador
for(const i in listaTarefas) {
    console.log("Nome:", listaTarefas[i].nome);
}

//Não precisa de index
for(const item of listaTarefas) {
    console.log("Nome:", item.nome)
}

console.log(listaTarefas)