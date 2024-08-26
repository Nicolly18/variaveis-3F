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
  "Hawaii",
  "Paris",
  "Nova York",
  "Rio de Janeiro",
  "Toquio"
  );

console.log(listaDeDestinos);
console.log(listaDeDestinos[3]);
listaDeDestinos.push("Coronel Vivida");
listaDeDestinos.push("Curitiba");
listaDeDestinos.push("Rio Branco");
listaDeDestinos.push("Berlin");
console.log(listaDeDestinos);