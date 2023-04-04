const lista = [
    'teste1',
    'teste2',
    'teste3',
    'teste4',
    'teste5',
    'teste6'
]

console.log(lista[1], lista[4])
console.log(lista.length)
lista.push('teste7') //push = adicionar valor na ultima casa do array
console.log(lista, lista.length)

lista.pop() //pop = apagar ultimo elemento do array
console.log(lista, lista.length)

lista.shift() //shift = apagar o primeiro elemento do array
console.log(lista, lista.length)

lista.splice(2, 1) //splice = apagar um elemento pelo indice. Primeiro o indice que irá remover, segundo quantas casas a partir daquele indice ira remover
console.log(lista, lista.length)

console.log(typeof(lista))
console.log(`Array Lista = `, Array.isArray(lista)) //verifica se é array

const itens = [
    1,
    'item',
    0.22,
    'a'
]

console.log(`Array Itens = `, Array.isArray(itens))

const numeros = [
    3,2,4,1,0
]

numeros.sort() // Ordena o array, serve pra string tambem e aceita maneiras diferentes de ordenação
console.log(numeros)

const novo = itens.concat(numeros) // Concatena 2 arrays em 1 so
console.log(novo)

console.log(itens.join(', ')) //Lista o array mas usando um separador especifico, no caso foi ,

console.log(itens.indexOf("a"))
console.log(itens.indexOf("sla"))
const search = 1
console.log(itens.indexOf(search)) //indexOF = retorna o index do valor inserido, caso nao ache retorna -1