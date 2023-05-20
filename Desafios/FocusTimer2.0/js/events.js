import {
  btnPlay,
  btnPause,
  btnSet,
  btnStop,
  btnMore,
  btnLess,
  SoundFlorest,
  SoundRain,
  SoundCoffeshop,
  SoundFireplace,
} from "./elements.js";



export default function Events({ controls, timer, sound }) {
  btnPlay.onclick = () => {
    controls.play();
    timer.countDown();
    sound.pressButton()
  };

  btnPause.onclick = () => {
    controls.pause();
    timer.hold();
    sound.pressButton()
  };

  btnStop.onclick = () => {
    controls.reset();
    timer.reset();
    sound.pressButton()
  };

  btnSet.onclick = () => {
    let newMinutes = controls.getMinutes();

    if (!newMinutes) {
      timer.reset();
      return;
    }
    timer.updateDisplay(newMinutes, 0);
    timer.updateMinutes(newMinutes);
  };

  btnMore.onclick = () => {
    timer.MoreFiveMinutes();
    sound.pressButton()
  };

    btnLess.onclick = () => {
      timer.LessFiveMinutes();
      sound.pressButton()
    };

    SoundFlorest.onclick = ()=> {
      sound.pressFlorest()
      sound.pressButton()
      controls.florestfill()
    }
    SoundRain.onclick = ()=> {
      sound.pressRain()
      sound.pressButton()
      controls.rainfill()

    }
    SoundCoffeshop.onclick = ()=> {
      sound.pressCoffe()
      sound.pressButton()
      controls.coffefill()
    }
    SoundFireplace.onclick = ()=> {
      sound.pressFireplace()
      sound.pressButton()
      controls.firefill()
    }

}


