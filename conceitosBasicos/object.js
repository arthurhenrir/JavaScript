const pessoa = {
    nome: 'Arthur',
    idade: 21,
    sexo: 'masculino'
} 

console.log('Nome:', pessoa.nome)
console.log('Idade:', pessoa['idade'])
console.log('Outro valor:', pessoa.outro)
pessoa.id = 0001  // Adicionar novo elemento no objeto
console.log(pessoa)

console.log(Object.keys(pessoa)) // Retorna apenas as chaves do objeto
console.log(Object.values(pessoa)) // Retorna apenas os valores do objeto

const pessoa2 = {
    altura: 1.79
}

const novaPessoa = Object.assign(pessoa, pessoa2) // Concatena dois objetos
console.log(novaPessoa)

delete novaPessoa.altura // Apaga um elemento do objeto
console.log(novaPessoa)