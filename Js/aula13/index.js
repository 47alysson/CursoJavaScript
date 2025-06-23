// strings são indexadas
let texto = "um \"texto\""; //escape
let texto2 = "o rato roeu a roupa do rei de roma.";

console.log(texto[4]);
console.log(texto.charAt(5));
console.log(texto.concat('', 'em', ' ','um dia'));
console.log(texto.indexOf('texto'));
console.log(texto.lastIndexOf('m', 3));
console.log(texto.match(/[a-z]/g));
console.log(texto.search(/x/));
console.log(texto.replace('um', 'outra'));
console.log(texto2.replace(/r/g, '#'));
console.log(texto2.length);
console.log(texto2.slice(2,6));
console.log(texto2.slice(-5, -1));
console.log(texto2.substring(texto2.length - 5, texto2.length - 1));
console.log(texto2.split('r'));
console.log(texto2.toUpperCase());
console.log(texto2.toLowerCase());

console.log(texto2.slice(0, 3));