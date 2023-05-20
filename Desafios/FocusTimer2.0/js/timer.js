import Sounds from "./sound.js";

export default function Timer({
  minutesDisplay,
  secondsDisplay,
  resetControls,
}) {
  let minutes = Number(minutesDisplay.textContent);
  let timerTimeOut;

  function updateDisplay(newMinutes, seconds) {
    newMinutes = newMinutes === undefined ? minutes : newMinutes;
    seconds = seconds === undefined ? 0 : seconds;
    minutesDisplay.textContent = String(newMinutes).padStart(2, "0");
    secondsDisplay.textContent = String(seconds).padStart(2, "0");
  }

  function reset() {
    updateDisplay(minutes, 0);
    clearTimeout(timerTimeOut);
  }

  function countDown() {
    timerTimeOut = setTimeout(() => {
      let seconds = Number(secondsDisplay.textContent);
      let minutes = Number(minutesDisplay.textContent);
      let isFinished = minutes <= 0 && seconds <= 0;
      updateDisplay(minutes, 0);
      if (isFinished) {
        resetControls();
        updateDisplay();
        Sounds().timeEnd()
        return;
      }

      if (seconds <= 0) {
        seconds = 60;
        --minutes;
      }

      updateDisplay(minutes, String(seconds - 1));
      countDown();
    }, 1000);
  }

  function MoreFiveMinutes() {
    let minutes = Number(minutesDisplay.textContent);
    let seconds = Number(secondsDisplay.textContent);

    minutes += 5;
    minutesDisplay.textContent = minutes;
    updateDisplay(minutes, seconds);
  }

  function LessFiveMinutes() {
    let minutes = Number(minutesDisplay.textContent);
    let seconds = Number(secondsDisplay.textContent);
    minutes -= 5;
    if(minutes <= 0){
      updateDisplay(0,0)
      return
    }

    minutesDisplay.textContent = minutes
    updateDisplay(minutes,seconds)
  }

  function updateMinutes(newMinutes) {
    minutes = newMinutes;
  }

  function hold() {
    clearTimeout(timerTimeOut);
  }

  return {
    updateDisplay,
    reset,
    countDown,
    MoreFiveMinutes,
    LessFiveMinutes,
    hold,
    updateMinutes,
  };
}
