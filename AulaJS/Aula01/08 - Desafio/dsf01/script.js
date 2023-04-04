let number01 = Number(prompt("Digite o primeiro número: "));
let number02 = Number(prompt("Digite o segundo número: "));
let res = document.querySelector('p')

let sum = number01 + number02;
let subtraction = number01 - number02;
let multiplication = number01 * number02;
let division = number01 / number02;
let restOfDivision = number01 % number02;


res.innerHTML=`A soma dos dois números é: ${sum}<br>`;
res.innerHTML+=`A subtração dos dois números é: ${subtraction}<br>`;
res.innerHTML+=`A multiplicação dos dois números é: ${multiplication}<br>`;
res.innerHTML+=`A divisão dos dois números é: ${division}<br>`;
res.innerHTML+=`O resto da divisão dos dois números é: ${restOfDivision}<br>`;

if(sum % 2 == 0){
    res.innerHTML+=`O número ${sum} é par<br>`;
} else {
    res.innerHTML+=`O número ${sum} é ímpar<br>`;
}

if(number01 == number02){
    res.innerHTML+=`Os números inseridos são iguais<br>`;
} else {
    res.innerHTML+=`Os números inseridos são diferentes<br>`;
}