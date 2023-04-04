let salario = 1000
let salarioAmigo = "200aa"
let salarioAmigoNumber = 200

console.log(salario + salarioAmigo);
console.log(
    typeof(salarioAmigo), salarioAmigo
);
console.log(salario + salarioAmigoNumber);
console.log(
    isNaN(salario), //isNaN = verifica se o valor é um numero ou nao, falso = numero, true = não numero
    isNaN(salarioAmigo)
)

const minhaString = "Oi"
const minhaOutraString = "tutu"
let stringJuntas = `${minhaString} + ${minhaOutraString}! Viu?`

console.log(stringJuntas)
