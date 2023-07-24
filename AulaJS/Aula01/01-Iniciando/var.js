
// Declarando variáveis
var name
name = "Brutos"
console.log(typeof name)

let age, isHuman;
age= 7
isHuman = false


// Usando Object em uma variável const
const person = {
    name: "Washington",
    age: 27,
    isHuman: true,
    walk(n){
        console.log(`${n} está andando`)
    },
}

//Usando a variável 'name' ou a propriedade do objeto 'person' como um argumento para função walk(parâmetro 'n')
person.walk(person.name)
person.walk(name)

//Concatenando os valores
console.log('Sua idade é ' + age + '. Ele é humano? ' + person.isHuman)
//Interpolando os valores com template literals
console.log(`Sua idade é ${person.age}. Ele é humano? ${isHuman}`)


//Usando array com valores string e uma arrow function 
const car = ['motor','pneus','volante','bancos', (on)=>{
    return on = 'O Carro ligou'
}]

console.log(`${car[4]()} e os ${car[1]} andaram.`)