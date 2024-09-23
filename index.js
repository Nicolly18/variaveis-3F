const prompt = require('prompt-sync');
const entrada = prompt();


let idade =18;
const anoNascimento = 2006;
let anoAtual = 2024;
const nomeCompleto = "Nicolly Teixeira";

console.log("meu nome é " + nomeCompleto + " nascido no ano de   " + anoNascimento + " e no ano atual " + anoAtual + " completo " + idade + " anos");

anoAtual = anoAtual + 1;
console.log(anoAtual);

idade = idade + 1;
console.log(idade);


//agência de viagens Hawaii paris Nova York Rio de Janeiro Tokyo 
const listaDeDestinos = new Array(
  " Hawaii",
  " Paris",
  "Nova York",
  "Rio de Janeiro",
  "Tóquio"
  );

console.log(listaDeDestinos);
console.log(listaDeDestinos[3]);
listaDeDestinos.push("  Coronel Vivida");
listaDeDestinos.push(" Curitiba");
listaDeDestinos.push(" Rio Branco");
listaDeDestinos.push(" Berlin");
console.log(listaDeDestinos);
var nomeComprador = entrada("Digite seu nome: ");
var idadeComprador = entrada("qual a sua idade?");

if(idadeComprador >= 18) {
  console.log("Comprador maior de idade");
console.log("Escolha seu destino");
  
   var contador= 0;

  while(contador <9) {
    console.log(listaDeDestinos[contador] );
    contador++;
  }
var destino = entrada("Digite oo numero que corresponde ao destino selecionado (0-8)");
console.log(`destino selecionado foi: ${listaDeDestinos[destino]}`);                     
  
} else {
console.log("Olá senhora "  + nomeComprador );
console.log("Não poderá efetuar a compra")
console.log("você não pode comprar pois é menor de idade");
    }          
 

  