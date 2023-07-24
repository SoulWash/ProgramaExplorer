// Transformando a String em Number
let string = "123"
console.log(Number(string)+ Number(string))

//Transformando o Number en String
let number = 456
console.log(String(number)+String(number))

// Utilizando o método Length
let word = "Parallax"
console.log(word.length)
console.log(String(number).length)

//Método toFixed() e replace()
number = 34.645645
console.log(number.toFixed(2).replace(".",","))

// Maiúsculas método toUpperCase() e Minúculas método toLowerCase()
console.log(word.toUpperCase())
console.log(word.toLowerCase())

// Separando Strings método split("")
let phrases = "Olha o meu grande bode!"
console.log(phrases.split(""))
// Juntando método join("")
console.log(phrases.split("").join("_"))

// Encontrando palavre com método includes()
console.log(phrases.includes("meu"))
