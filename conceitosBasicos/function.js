function queDiaEHoje() {
    const data = new Date();
    console.log(`Hoje é dia: ${data.getDate()}`);
    
}

queDiaEHoje();

function soma(valor1, valor2){
    console.log(`A soma entre ${valor1} e ${valor2} é:`, valor1 + valor2);
}

soma(10,2);
soma(1,3);

const funcionario1 = {
    nome: 'Zezinho',
    desconto: 0.2,
    salarioBruto: 2000,
    salarioLiquido: 0
}

const funcionario2 = {
    nome: 'Mariz',
    desconto: 0.1,
    salarioBruto: 2000,
    salarioLiquido: 0
}

function desconto(salarioBruto, desconto) {
    return salarioBruto - (salarioBruto * desconto);
}

funcionario1.salarioLiquido = desconto(funcionario1.salarioBruto, funcionario1.desconto);
funcionario2.salarioLiquido = desconto(funcionario2.salarioBruto, funcionario2.desconto);

console.log(`
    Funcionario 1: ${funcionario1.salarioLiquido}
    Funcionario 2: ${funcionario2.salarioLiquido}
`);