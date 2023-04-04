// Manipulando Arrays

//Criar Array com construtor
let cavalo = "Horse"
let zebra = "Zebra"
let macaco = "Monkey"
let array = new Array(cavalo,zebra,macaco)
console.log(array)

//Contar os elementos de um array
console.log(array.length)


// Transformando Strings em Arrays
let word = "developer javascript"
console.log(Array.from(word))

//Manipulando Arrays
// adiciona um item no fim push()
array.push("Cat")
console.log(array)
//adiciona np começo unshift()
array.unshift("Dog")
console.log(array)
//remove do fim pop()
array.pop()
console.log(array)
//remove do começo shift()
array.shift()
console.log(array)
//Pegar somente alguns elemnetos do array slice(index,quantidade de casas no array)
console.log(array.slice(1,3))
//Remover 1 ou mais items em qualquer posição do array splice(index, quantos vão ser removidos)
array.splice(2,1)
console.log(array)
//Encontrar a posição de um elemento no array indexOf()
let index = array.indexOf('Zebra')
array.splice(index,1)
console.log(array)

