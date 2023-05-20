import Timer from "./timer.js";
import Controls from "./controls.js";
import Events from "./events.js";
import {
  btnPlay,
  btnPause,
  btnSet,
  btnStop,
  minutesDisplay,
  secondsDisplay,
  florestColor,
  rainColor,
  coffeshopColor,
  fireplaceColor,
  SoundFlorest,
  SoundRain,
  SoundCoffeshop,
  SoundFireplace
} from "./elements.js";
import Sounds from "./sound.js";

const sound = Sounds()

const controls = Controls({
  btnPlay,
  btnPause,
  btnStop,
  btnSet,
  florestColor,
  rainColor,
  coffeshopColor,
  fireplaceColor,
  SoundFlorest,
  SoundRain,
  SoundCoffeshop,
  SoundFireplace
})


const timer = Timer({
  minutesDisplay,
  secondsDisplay,
  resetControls: controls.reset
})

Events({controls,timer,sound})

