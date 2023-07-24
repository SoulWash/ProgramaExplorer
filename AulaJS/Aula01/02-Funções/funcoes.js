// Criar um aplicativo de frases motivacionais
//Function Statement(Declaração de função)
function createPhrases(){
    console.log('Estudar é muito bom')
    console.log('Paciência e persistência')
    console.log('Revisão é mãe do aprendizado')
}
createPhrases()

//Function expression
//Function anonymous
//parâmetros - parameters
const sum = function(number1,number2){
    console.log(number1 + number2)
}
sum(2,3) // argumentos - arguments

// Return 
const mult = function(num1,num2){
    let total = num1 * num2
    return total
}

let number1 = 3
let number2 = 6

console.log(`A multiplicação é ${mult(number1, number2)}`)


//Function Scope 

let subject = 'create video'

function createThink(subject) {
    subject = 'study'
    return subject
}

console.log(subject)
console.log(createThink(subject))
