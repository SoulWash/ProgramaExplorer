//Operadores de Comparação: resultado Booleano
// Igual ou Diferente:
let three = 3
let two = 2
console.log(three == two) //three é igual a two ? false
console.log(three != two) //three é diferente de two ? true
console.log(two == "2") // two é igual a String '2' ? true 

console.log("----------------")
// Estritamente igual e Estritamente diferente:
console.log(three === "3") //three é estritamente igual a String '3' ? false
console.log(two !== "2") //two é estritamente diferente a String '2' ? true
console.log(two === 2) //two é estritamente diferente a 2 ? true

console.log("----------------")
// Maior e Menor(igual)
console.log(3 > 6)//> Maior que >
console.log(6 >= '6') //>= Maior igual a >=
console.log(13 < 6) //< Menor que <
console.log(25 <= 25) //<= Menor igaul a <=

console.log("----------------")

// Atribuição
let x = 40
console.log('Adição ' + (x+=5))//Adição +=
console.log("Subtração " + (x-=3))//Subtração -=
console.log("Multiplicação " + (x*=8))//Multiplicação *=
console.log("Divisão " + (x/=7))//Divisão /=
console.log("Resto da Divisão " + (x%=23))//Resto da Divisão %=
console.log("Exponecial "+ (x**=9))//Exponecial **=

console.log("----------------")
