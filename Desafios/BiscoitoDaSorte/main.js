const screenOne = document.querySelector('.screenOne');
const screenTwo = document.querySelector('.screenTwo');
const imgMouseIn = document.querySelector('#imgMouseIn');
const btnReset = document.querySelector('#btnReset');
const bodyColor = document.querySelector('body');
let pFrases = document.querySelector('p.frases')

imgMouseIn.addEventListener('click', imgMouseClick);
btnReset.addEventListener('click', btnResetClick);


function imgMouseClick(){
    toggleEvent()

    bodyColor.style.background = "linear-gradient(120deg, #f40a0a, #fada39)";

    
    let frases = [
        "E tudo que atrasa, deixa a maré levar!",
        "Um sorriso desmancha até a cara mais fechada.",
        "Acreditar que você pode já é meio caminho andado.",
        "Ame a si mesmo e você não fará mais nada que te prejudique.",
        "Espalhando o bem a gente vai colecionando as melhores coisas da vida.",
        "Se alguém está tão cansado que não possa te dar um sorriso, deixa-lhe o teu.",
        "Longe de toda negatividade, a onda boa se propaga no ar!",
        "Regue seu coração com amor e ele brotará um jardim de alegria na alma",
        "Ofereça seu melhor à vida e ela te recompensará.",
        "Nada brilha mais que a vibe da tua alma!",
        "Pare de reclamar e ganhei mais tempo para ser feliz."
    ]
    let random = Math.round(Math.random() * 10);
    pFrases.innerText = `${frases[random]}`
}

function btnResetClick(){
    toggleEvent()
    bodyColor.style.background = "linear-gradient(45deg, #f40a0a, #fada39)";
}

function toggleEvent(){
    screenOne.classList.toggle('hide');
    screenTwo.classList.toggle('hide');
}

