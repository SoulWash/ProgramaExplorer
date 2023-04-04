// Function Hoisting

sayMyname()

function sayMyname(){
    console.log('Washington')
}

//Não vai funcionar a function hoisting
// myName()
// const myName = function(){
//     console.log('Jorge')
// } 
//Por está usando como variável mesmo sendo VAR não vai realizar o function hoisting

//Arrow Function ()=>{}
const correr = () => {
    console.log('Estou correndo!!')
}
correr()

//Callback function: Declara uma outra função como paraâmetro da função à executar.
function ligar(carro){
    console.log('antes do callback <<')
    carro()
    console.log('depois do callback >>')
}

ligar(
    () => {
        console.log('Carro está ligado!')
    }
)

// Function constructor
function Person(name){
    this.name = name;

    this.walk  = function(){
        return this. name + " está andando"
    }
}
const pessoa = new Person("Washington")
console.log(pessoa.walk())

