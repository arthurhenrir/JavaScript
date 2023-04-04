// meses começam do 0
const dataAniversario = new Date(2020, 0, 20);
console.log(dataAniversario);
console.log(dataAniversario.getTime());

const firstDate = new Date(0);
console.log(firstDate);

const hoje = new Date();
//console.log(hoje.toString())
//console.log(hoje.toLocaleDateString())

// Formato global recomendado
console.log(hoje.toISOString());

console.log(hoje);
const dia = hoje.getDate();
hoje.setDate(dia + 5); // +5 dias depois de hoje
hoje.setHours(5, 30, 0); // Horas, Segundos, Milisegundos
console.log(hoje);

console.log(`
    Dia: ${hoje.getDate()}
    Mes: ${hoje.getMonth()}
    Ano: ${hoje.getFullYear()}
    Hora: ${hoje.getHours()}
    Minute: ${hoje.getMinutes()}
    Seconds: ${hoje.getSeconds()}    
    Data completa: ${hoje.toISOString()}
`)

console.log(
    new Date(2020, 02, 10) > new Date(2001, 01, 2)
)