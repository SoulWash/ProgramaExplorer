/*
Apresente a mensagem ao usuário;
Gerar um número aleatório;
Verificar se o número digitado é o mesmo que o aleatório gerado pelo sistema;
Enquanto o usuário não adiinha, irá mostrar uma mensagem de erro;
E caso acerto o número, apresentar mensagem de parabéns e com a quantidade de tentativas;
*/


let result = prompt("Adivinhe o número que estou pensando? Está entre 0 e 10");
const random = Math.round(Math.random() * 10);
let xTentativas = 0;
let res = document.querySelector("#res");


while(Number(result) != random) {
    result = prompt("Erro, tente novamente!")

    xTentativas++
}
res.innerHTML = `Parabéns!! Você advinhou o número em ${xTentativas} tentativas.`
