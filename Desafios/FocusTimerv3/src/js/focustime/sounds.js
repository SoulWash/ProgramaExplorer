import ambientBg from "./ambientBg.js";
import * as el from "./elements.js";

export const buttonPressAudio = new Audio("./assets/sound/button-press.wav");

export const kichebTimer = new Audio("./assets/sound/kichen-timer.mp3");

export const Florest = new Audio("./assets/sound/Floresta.wav");
export const Rain = new Audio("./assets/sound/Chuva.wav");
export const Coffeshop = new Audio("./assets/sound/Cafeteria.wav");
export const Fire = new Audio("./assets/sound/Lareira.wav");
Florest.loop = true;
Rain.loop = true;
Coffeshop.loop = true;
Fire.loop = true;

export function setVolume() {
  Florest.volume = event.target.value / 100;
  Rain.volume = event.target.value / 100;
  Coffeshop.volume = event.target.value / 100;
  Fire.volume = event.target.value / 100;
}

export default function () {
  function pressFlorest(audio) {
    Florest.play();
    Rain.pause();
    Coffeshop.pause();
    Fire.pause();

    ambientBg().florestColors();

    el.florest.oninput = () => setVolume(el.florest.value);
    el.florest.onchange = () => setVolume(el.florest.value);
  }
  function pressRain() {
    Rain.play();
    Florest.pause();
    Coffeshop.pause();
    Fire.pause();

    ambientBg().rainColors();
    el.rain.oninput = () => setVolume(el.rain.value);
    el.rain.onchange = () => setVolume(el.rain.value);
  }

  function pressCoffe() {
    Coffeshop.play();
    Florest.pause();
    Rain.pause();
    Fire.pause();

    ambientBg().storeColors();

    el.store.oninput = () => setVolume(el.store.value);
    el.store.onchange = () => setVolume(el.store.value);
  }
  function pressFire() {
    Fire.play();
    Florest.pause();
    Coffeshop.pause();
    Rain.pause();

    ambientBg().fireColors();
    el.fire.oninput = () => setVolume(el.fire.value);
    el.fire.onchange = () => setVolume(el.fire.value);
  }

  function paused() {
    Fire.pause();
    Florest.pause();
    Coffeshop.pause();
    Rain.pause();
  }

  return {
    pressFlorest,
    pressRain,
    pressCoffe,
    pressFire,
    paused,
  };
}
