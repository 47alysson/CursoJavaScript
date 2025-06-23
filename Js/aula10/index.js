const nome = 'Alysson'; // string
const nome1 = "Alysson"; // string
const nome2 = `Alysson`; // string
const num1 = 10; // number
const num2 = 10.2 // number
let nomeAluno; // undefined -> não aponta pra local nenhum na memória
let sobrenomeAluno = null; // Nulo -> não aponta pra local nenhum na memória
const aprovado = true; // boolean = true, false


const a = [1,2];
const b = a;

console.log(a,b);

b.push(3);
console.log(a,b);