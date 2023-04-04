let name = prompt("Qual nome do aluno? ");
let primeiraNota = Number(prompt("Digite 1° número"));
let segundaNota = Number(prompt("Digite 2° número"));
let terceiroNota = Number(prompt("Digite 3° número"));
let res;


let soma = primeiraNota + segundaNota + terceiroNota;
let med = soma / 3;


if(med > 6) {
    res = `Aluno ${name}, com a média ${med.toFixed(2).replace(".",",")} está aprovado!`;
} else if (med > 3){
    res =`Aluno ${name}, com a média ${med.toFixed(2).replace(".",",")} está em recuperação!`;
} else {
    res `Aluno ${name}, com a média ${med.toFixed(2).replace(".",",")} foi reprovado!`;
}

alert(res)