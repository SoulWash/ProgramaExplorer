// Variaveis

const screenOne = document.querySelector(".screenOne");
const screenTwo = document.querySelector(".screenTwo");

const body = document.querySelector("body");
let randomNumber = Math.round(Math.random() * 10);

const btnTry = document.querySelector("#btnTry");
const btnReset = document.querySelector("#btnReset");

let xAttempts = 1;

// Eventos
btnTry.addEventListener("click", handleTryClick);
btnReset.addEventListener("click", handleResetClick);
document.addEventListener("keypress", pressEnter);

// Funções
function handleTryClick(event) {
  event.preventDefault(); // não faça o padrão
  const inputNumber = document.querySelector("#inputNumber");

    if(Number(inputNumber.value) < 0 || Number(inputNumber.value) > 10){
        alert("[ERRO]\nNão é aceito o número digitado,tente novamente!")
    }
    if(Number(inputNumber.value) == ''){
        alert("Digite um número válido!")
    }

  
    if (Number(inputNumber.value) == randomNumber) {
    toggleScreen();

    body.style.background =
      "linear-gradient(207.56deg, #00DDFB 0%, #00709F 100%)";
    screenTwo.querySelector(
      "h2"
    ).innerHTML = `acertou em ${xAttempts} tentativas`;
  }

  inputNumber.value = "";
  xAttempts++;
}

function handleResetClick() {
  toggleScreen();

  body.style.background =
    "linear-gradient(107.56deg, #00DDFB 0%, #00709F 100%)";

  randomNumber = Math.round(Math.random() * 10);
  xAttempts = 1;
}

function toggleScreen() {
  screenOne.classList.toggle("hide");
  screenTwo.classList.toggle("hide");
}

function pressEnter(e){
    if (e.key == "Enter" && screenOne.classList.contains("hide")) {
        handleResetClick();
      }
}