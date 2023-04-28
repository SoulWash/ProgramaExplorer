import Controls from "./controls.js";
import Timer from "./timer.js";
import Sounds from "./sounds.js";
import Events from "./events.js";
import ModeScreen from "./modoScreen.js";
import {
  btnPlay,
  btnPause,
  btnSet,
  btnStop,
  minutesDisplay,
  secondsDisplay,
} from "./elements.js";

const sound = Sounds();

const controls = Controls({
  btnPlay,
  btnPause,
  btnSet,
  btnStop,
});

const timer = Timer({
  minutesDisplay,
  secondsDisplay,
  resetControls: controls.reset,
});

Events({ controls, timer, sound });

ModeScreen()