import {Modal} from './modal.js';
import {IMC, notNumber} from './utills.js';
import {AlertError} from './alertError.js';
import {ModoDark} from './dark.js';

const form = document.querySelector("form");
const inputWeight = document.querySelector("#weight");
const inputHeight = document.querySelector("#height");

inputWeight.oninput = () => AlertError.close()
inputHeight.oninput = () => AlertError.close()

form.onsubmit = e => {
  e.preventDefault();
  const iW = inputWeight.value;
  const iH = inputHeight.value;

  const weightOrHeightIsNotANumber = notNumber(iW) || notNumber(iH);
  if(weightOrHeightIsNotANumber) {
    AlertError.open()
    return;
  }
  AlertError.close()

  const result = IMC(iW, iH)
  displayResultMessage(result)
}

function displayResultMessage(result){
  const message = `Seu IMC é ${result}`
  
  Modal.message.innerText = message
  Modal.open();
}
