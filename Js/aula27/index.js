// ? :

const pontuacaoUsuario = 999;

const nivelUsuario = pontuacaoUsuario >= 1000 ? 'Usuário VIP' : 'Usuário Normal';

//                              condição - ? = valor verdadeiro - : = valor para falso

const corUsuario = null;
const corPadrao = corUsuario || 'Preta';

console.log(nivelUsuario);