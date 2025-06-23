const nome = 'Alysson';
const sobrenome = 'Oliveira';
const idade = 27;
const peso = 95;
const altura = 1.82;

let imc;
let anoNascimento;

imc = peso/(altura*altura);
anoNascimento = 2025 - idade;

console.log(nome,sobrenome,'tem',idade,'anos, pesa',peso,'kg, tem',altura,'M de altura e seu IMC é de',imc);
console.log(nome,'Nasceu em',anoNascimento);

// template strings
console.log(`tem ${altura} de altura`);

