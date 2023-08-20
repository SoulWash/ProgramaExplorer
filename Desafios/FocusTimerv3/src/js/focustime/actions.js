import state from "./state.js";
import * as timer from "./timer.js";
import * as el from "./elements.js";
import * as sounds from "./sounds.js";
import Sounds from "./sounds.js";

export function toggleRunning() {
  state.isRunning = document.documentElement.classList.toggle("running");

  timer.countdown();
  sounds.buttonPressAudio.play();
}

export function reset() {
  state.isRunning = false;
  document.documentElement.classList.remove("running");

  timer.updateDisplay();
  sounds.buttonPressAudio.play();
  Sounds().paused();
}
export function set() {
  el.minutes.setAttribute("contenteditable", true);
  el.minutes.focus();
}

export function plus() {
  timer.MoreFiveMinutes();
  sounds.buttonPressAudio.play();
}

export function minus() {
  timer.LessFiveMinutes();
  sounds.buttonPressAudio.play();
}

export function toggleMusic() {
  el.florest.onclick = () => {
    Sounds().pressFlorest();

  };

  el.fire.onclick = () => {
    Sounds().pressFire();
  };

  el.rain.onclick = () => {
    Sounds().pressRain();
  };

  el.store.onclick = () => {
    Sounds().pressCoffe();
  };
}
