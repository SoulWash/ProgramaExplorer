// Operadores Lógicos
let coffe = true;
let milk = false;
let sugar = false;
let hot = true

// Negação ! NOT
console.log(!milk)

// Conjunção && AND
console.log(coffe && sugar) 

// Disjunção || OR
console.log(coffe && hot || milk && hot)

console.log("----------------")

//Operador Condicional
// Ternário : condição ? valor1 : valor2
const wakeUp = coffe && hot ? "Acordado" : "Voltar a dormir"
console.log(wakeUp)