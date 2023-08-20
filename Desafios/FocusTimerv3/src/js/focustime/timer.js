import state from "./state.js";
import * as el from "./elements.js";
import { reset } from "./actions.js";
import * as sounds from "./sounds.js";
import Sounds from "./sounds.js";

export function countdown() {
  if (!state.isRunning) {
    return;
  }
  let minutes = Number(el.minutes.textContent);
  let seconds = Number(el.seconds.textContent);

  seconds--;

  if (seconds < 0) {
    seconds = 59;
    minutes--;
    if (minutes < 0) {
      reset();
      sounds.kichebTimer.play()
      Sounds().paused()
      return;
    }
  }
  updateDisplay(minutes, seconds);
  setTimeout(() => countdown(), 1000);
  
}

export function updateDisplay(minutes, seconds) {
  minutes = minutes ?? state.minutes;
  seconds = seconds ?? state.seconds;

  el.minutes.textContent = String(minutes).padStart(2, "0");
  el.seconds.textContent = String(seconds).padStart(2, "0");
}


export function MoreFiveMinutes() {
  let minutes = Number(el.minutes.textContent);
  let seconds = Number(el.seconds.textContent);

  minutes += 5;
  el.minutes.textContent = minutes;
  if(minutes > 60){
    updateDisplay(60,0)
    return
  }
  updateDisplay(minutes, seconds);
}

export function LessFiveMinutes() {
    let minutes = Number(el.minutes.textContent);
    let seconds = Number(el.seconds.textContent);
  
    minutes -= 5;
    el.minutes.textContent = minutes;
    if(minutes <= 0){
      updateDisplay(0,0)
      return
    }
    updateDisplay(minutes, seconds);
  }

  