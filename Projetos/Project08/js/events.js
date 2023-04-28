import { btnPause,btnPlay,btnSet,btnStop, SoundOn, SoundOff } from "./elements.js";

export default function Events({controls, timer, sound}){

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
      
      SoundOn.onclick = () => {
          SoundOff.classList.remove("hide");
          SoundOn.classList.add("hide");
          sound.bgAudio.pause()
        };
        SoundOff.onclick = () => {
            SoundOn.classList.remove("hide");
            SoundOff.classList.add("hide");
            sound.bgAudio.play()
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
      
}
