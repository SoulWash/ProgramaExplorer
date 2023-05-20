export default function Controls({
  btnPlay,
  btnPause,
  btnSet,
  btnStop,
  florestColor,
  rainColor,
  coffeshopColor,
  fireplaceColor,
  SoundFlorest,
  SoundRain,
  SoundCoffeshop,
  SoundFireplace
}){
  function play(){
    btnPlay.classList.add("hide");
    btnPause.classList.remove("hide");
  
    btnSet.classList.add("hide");
    btnStop.classList.remove("hide");
  }

  function pause(){
    btnPause.classList.add("hide");
    btnPlay.classList.remove("hide");
  }


  function reset() {
      btnStop.classList.add("hide");
      btnSet.classList.remove("hide");
    
      btnPause.classList.add("hide");
      btnPlay.classList.remove("hide");
    }

  function getMinutes(){
    let newMinutes = prompt("Quantos minutos?");
    if(!newMinutes){
      timer.reset()
    }
    return newMinutes
  }

  function florestfill(){
    florestColor.classList.add("change-fill")
    rainColor.classList.remove("change-fill")
    coffeshopColor.classList.remove("change-fill")
    fireplaceColor.classList.remove("change-fill")

    SoundFlorest.style.background= "#02799d"
    SoundRain.style.background= "#e1e1e6"
    SoundCoffeshop.style.background= "#e1e1e6"
    SoundFireplace.style.background= "#e1e1e6"
  }
  function rainfill(){
    rainColor.classList.add("change-fill")
    florestColor.classList.remove("change-fill")
    coffeshopColor.classList.remove("change-fill")
    fireplaceColor.classList.remove("change-fill")

    SoundRain.style.background= "#02799d"
    SoundFlorest.style.background= "#e1e1e6"
    SoundCoffeshop.style.background= "#e1e1e6"
    SoundFireplace.style.background= "#e1e1e6"
  }
  function coffefill(){
    coffeshopColor.classList.add("change-fill")
    florestColor.classList.remove("change-fill")
    rainColor.classList.remove("change-fill")
    fireplaceColor.classList.remove("change-fill")

    SoundCoffeshop.style.background= "#02799d"
    SoundRain.style.background= "#e1e1e6"
    SoundFlorest.style.background= "#e1e1e6"
    SoundFireplace.style.background= "#e1e1e6"
  }
  function firefill(){
    fireplaceColor.classList.add("change-fill")
    rainColor.classList.remove("change-fill")
    florestColor.classList.remove("change-fill")
    coffeshopColor.classList.remove("change-fill")

    SoundFireplace.style.background= "#02799d"
    SoundRain.style.background= "#e1e1e6"
    SoundFlorest.style.background= "#e1e1e6"
    SoundCoffeshop.style.background= "#e1e1e6"
  }


    return {
      reset,
      play,
      pause,
      getMinutes,
      florestfill,
      rainfill,
      coffefill,
      firefill
    }
}
