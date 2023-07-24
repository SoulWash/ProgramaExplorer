// 1. Declare uma variável de nome weight
var weight;

// 2. Que tipo de dado é a variável acima?
console.log(typeof weight)

// 3. Declare uma variável e atribua valores para cada um dos dados:
let name,age,stars, isSubscribed;
name = 'Washington'  // String
age = 27             // Integer
stars = 9.7          // Float
isSubscribed = true  // Boolean

// 4. A variável student abaixo é de que tipo de dado?
// 4.01. Atribua a ela as mesma propriedades e valores do exer.3.
// 4.02. Mostrar a mensagem no console.log
const student01 = {
    name: "Jorge",
    age: 34,
    weight: 79.8,
    isSubscribed: false
}
console.log(typeof student01)
console.log(`${student01.name} sua idade é ${student01.age} e pesa ${student01.weight}`)

// 5. Declare uma variável do tipo Array, de nome students e atribua a ela nenhum valor, ou seja, somente o Array vazio.
let students = []

// 6. Reatribua valor para a variável acima, colocando dentro dela o objeto student da questão 4.
students = [student01]

// 7. Coloque no console o valor da posição zero do Array acima
console.log(students[0])

// 8. Crie um novo student e coloque na posição 1 do array students
const student02 = {
    name: "Drax",
    age: 54,
    weight: 186.3,
    isSubscribed: true
}
students[1] = student02
console.log(students[1])

// 9. Sem rodar o código responda qual é a resposta do código abaixo  e por que? Após sua resposota, rode o código e veja se você acertou

//Resposta: A variável VAR por ter em seu conceito a regra hoisting, irá elevar a variável e o valor será undefined, pois, o valor '1' só vai aparecer depois que passar pela declaração.

console.log(a)
var a = 1

// Se for LET ou CONST terá um erro de referência por não ter o mesmo conceito de hoisting do VAR.

//10. Quantidade de elementos no Array students
console.log(students.length)