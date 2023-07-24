alert('Hello World')

const num01 = Number(prompt('Digite um número'))
const num02 = Number(prompt('Digite outro número'))

let sum = num01 + num02
let sub = num01 - num02
let mult = num01 * num02
let divid = num01 / num02

alert(`Sumar: ${sum} \n Subtrair: ${sub} \n Multiplicar: ${mult} \n Dividir: ${divid}`)

if(typeof num01 == "number"){
    alert('é um número')
} else {
    alert('não é um número')
}

if(typeof num01 == "string"){
    alert('é uma string')
} else {
    alert('não é uma string')
}


if(num01 % 2 == 0){
    alert(`Primeiro número digitado ${num01} é par`)
} else {
    alert(`Primeiro número digitado ${num01} é impar`)
}

if(num02 % 2 == 0){
    alert(`Primeiro número digitado ${num02} é par`)
} else {
    alert(`Primeiro número digitado ${num02} é impar`)
}

let result = sum + sub + mult + divid
alert(result > 7 ? 'aprovado' : 'reprovado')


if(typeof Boolean(result) == "boolean") {
    alert('é booleano')
} else {
    alert('não é booleano')
}