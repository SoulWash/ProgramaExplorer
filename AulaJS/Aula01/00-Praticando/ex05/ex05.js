/* 
  Crie uma lista de pacientes
  Cada paciente dentro da lista, deverá conter
    nome
    idade
    peso
    altura
  Escreva uma lista contendo o nome dos pacientes
*/

let pacientes = [
  {
    nome: "Jorge",
    idade: 46,
    peso: 120.7,
    altura: 1.46,
  },
  {
    nome: "Linda",
    idade: 26,
    peso: 40.5,
    altura: 1.67,
  },
  {
    nome: "Carol",
    idade: 35,
    peso: 77.7,
    altura: 1.72,
  },
  {
    nome: "Reinaldo",
    idade: 15,
    peso: 90.3,
    altura: 1.65,
  },
];

/*
let pacientNames
for(let index = 0; index < pacientes; index++){
    pacientNames[index]= pacientes[index].name
}
*/

for (pacient of pacientes) {
  let pacientNames = pacient.nome;
  let pacientAge = pacient.idade;
  let pacientWeight = pacient.peso;
  let pacientHeight = pacient.altura;

  console.log(
    `${pacientNames} tem ${pacientAge} anos, pesa ${pacientWeight}kg e sua altura é ${pacientHeight}cm.`
  );


  function calcImc() {
    let imc = (pacientWeight / (pacientHeight ** 2)).toFixed(2);
    return imc;
  }

  let magro = calcImc() < 18.5;
  let normal = calcImc() < 24.9;
  let sobrepeso = calcImc() < 29.9;
  let obesidade = calcImc() < 39.9;
  let obesidadeGrave =  calcImc() > 40;

  if (magro) {
    console.log("Magro!");
  } else if (normal) {
    console.log("Normal!");
  } else if (sobrepeso) {
    console.log("Sobrepeso!");
  } else if (obesidade) {
    console.log("Obesidade!");
  } else if(obesidadeGrave){
    console.log("Obesidade Grave!");
  } else {
    console.log("Não definido")
  }
}
